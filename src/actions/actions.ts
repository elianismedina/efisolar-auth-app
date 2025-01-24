"use server";

import { prisma } from "../lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { signIn, signOut } from "../../auth";

import { env } from "process";

const FormSchema = z.object({
  userName: z.string().nonempty(),
  location: z.string().nonempty(),
  email: z.string().email(),
  phoneNumber: z.string().nonempty(),
  averageBill: z.number().int().positive(),
  roofType: z.string().nonempty(),
  requestType: z.string().nonempty(),
  systemType: z.string().nonempty(),
  billUrl: z.string().optional(),
  additionalComments: z.string().optional(),
});

export async function createQuote(formData: FormData) {
  const file = formData.get("billUrl") as File;
  const url = await uploadBill(file || undefined);

  const {
    userName,
    location,
    email,
    phoneNumber,
    averageBill,
    roofType,
    requestType,
    systemType,
    billUrl,
    additionalComments,
  } = FormSchema.parse({
    userName: formData.get("userName") as string,
    location: formData.get("location") as string,
    email: formData.get("email") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    averageBill: Number(formData.get("averageBill")),
    roofType: formData.get("roofType") as string,
    requestType: formData.get("requestType") as string,
    systemType: formData.get("systemType") as string,
    billUrl: url?.toString(),
    additionalComments: formData.get("additionalComments") as string,
  });
  await prisma.quote.create({
    data: {
      userName: userName,
      location: location,
      email: email,
      phoneNumber: phoneNumber,
      averageBill: averageBill,
      roofType: roofType,
      requestType: requestType,
      systemType: systemType,
      billUrl: billUrl,
      additionalComments: additionalComments,
    },
  });
  revalidatePath("/");
  redirect("/");
}
interface UploadResult {
  url: string;
}
async function uploadBill(file?: File): Promise<string | null> {
  if (!file || file.size === 0) {
    console.warn("No file provided or file is empty.");
    return null;
  }
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise<UploadResult>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            upload_preset: env.NEXT_PUBLIC_UPLOAD_PRESET,
            api_key: env.CLOUDINARY_API_KEY,
            api_secret: env.CLOUDINARY_API_SECRET,
            cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          },
          function (error, result) {
            if (error || result === undefined) {
              reject(error || new Error("Upload result is undefined."));
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    return result.url;
  } catch (error) {
    console.error("Error uploading image", error);
    throw error;
  }
}

export const login = async () => {
  await signIn("github", { redirectTo: "/quote" });
};
export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
