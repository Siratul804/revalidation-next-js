"use client";
import { addInvoice } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const Invoice = () => {
  const [state, formAction] = useFormState(addInvoice, undefined);
  return (
    <>
      <form action={formAction}>
        <h1 className="text-black">Due Amount</h1>
        <input
          className="bg-white"
          type="text"
          placeholder="due_amount"
          name="due_amount"
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default Invoice;
