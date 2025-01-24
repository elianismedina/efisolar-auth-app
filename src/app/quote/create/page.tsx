import React from "react";
import QuoteForm from "../components/quote-form";

const CreateQuotePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 bg-zinc-100">
      <p className="text-2xl font-bold mt-4">
        !Háblanos de ti! <br /> Queremos conocerte
      </p>
      <QuoteForm />
    </div>
  );
};

export default CreateQuotePage;
