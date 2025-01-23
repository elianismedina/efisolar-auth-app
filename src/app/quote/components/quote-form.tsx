"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { v2 as cloudinary } from "cloudinary";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createQuote } from "../../../actions/actions";
import SubmitButton from "../components/submit-button";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const colombiaDepartments = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
];
const requestTypes = ["Residencial", "Comercial", "Empresarial"];
const roofTypes = [
  "Termoacústica",
  "Standing seam",
  "Teja de barro",
  "Manto asfáltico",
  "Teja eternit",
  "Madera",
  "Zinc",
];
const systemTypes = ["Conectado-On grid", "Aislado-Off grid", "Híbrido"];

const formSchema = z.object({
  userName: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),

  email: z
    .string({
      required_error: "Email is required.",
    })
    .email(),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  averageBill: z
    .number()
    .min(0, {
      message: "Average bill must be at least 0.",
    })
    .max(10000000, {
      message: "Average bill must be at most 100.",
    })
    .default(0),
  requestType: z.string().min(3, {
    message: "Request type must be at least 3 characters.",
  }),
  roofType: z.string().min(3, {
    message: "Roof type must be at least 3 characters.",
  }),
  systemType: z.string().min(3, {
    message: "System type must be at least 3 characters.",
  }),
  billUrl: z.string(),
  additionalComments: z.string().optional(),
});

export default function QuoteForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      location: "",
      email: "",
      phoneNumber: "",
      averageBill: 0,
      requestType: "",
      roofType: "",
      systemType: "",
      billUrl: "",
      additionalComments: "",
    },
  });
  return (
    <div className="max-w-2xl mx-auto my-4">
      <Form {...form}>
        <form action={createQuote} className="space-y-2 p-4">
          {/*Add the name field*/}
          <FormField
            name="userName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál es tu nombre completo?</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    required
                    {...field}
                    className="flex-1 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the location field*/}
          <FormField
            name="location"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿En donde vives?</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colombiaDepartments.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the email field*/}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál es tu correo electrónico?</FormLabel>
                <FormControl>
                  <input
                    type="email"
                    required
                    {...field}
                    className="flex-1 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the phone number field*/}
          <FormField
            name="phoneNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿A qué número te podríamos contactar?</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    required
                    {...field}
                    className="flex-1 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the average bill field*/}
          <FormField
            name="averageBill"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Factura Promedio</FormLabel>
                <FormControl>
                  <input
                    type="number"
                    required
                    {...field}
                    className="flex-1 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the request type field*/}
          <FormField
            name="requestType"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Tu solicitud es para?</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a request type"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {requestTypes.map((requestType) => (
                      <SelectItem key={requestType} value={requestType}>
                        {requestType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the roof type field*/}
          <FormField
            name="roofType"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál es tu tipo de techo?</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a roof type"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roofTypes.map((roofType) => (
                      <SelectItem key={roofType} value={roofType}>
                        {roofType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Add the system type field*/}
          <FormField
            name="systemType"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿En cuál sistema estas interesado?</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el sistema"></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {systemTypes.map((systemType) => (
                      <SelectItem key={systemType} value={systemType}>
                        {systemType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="billUrl"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Podrías subir una foto de tu factura de energía?
                </FormLabel>
                <FormControl>
                  <input
                    type="file"
                    {...field}
                    className="flex-1 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*Add the additional comments field*/}
          <FormField
            name="additionalComments"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Debemos saber algo más de tu proyecto solar?
                </FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    className="flex-1 block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <SubmitButton type="submit">Enviar</SubmitButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
