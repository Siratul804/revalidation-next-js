"use client";
import { useFormState, useFormStatus } from "react-dom";
import { searchForm } from "@/app/lib/data";
const SearchWithForm = () => {
  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(searchForm, initialState);

  console.log(state);

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        disabled={pending}
      >
        {pending ? "Searching..." : "Search"}
      </button>
    );
  }

  return (
    <>
      <form action={formAction}>
        <div className="flex justify-center py-5 bg-white ">
          <input
            className="shadow bg-white appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="search"
          />
          <Submit />
        </div>
      </form>
    </>
  );
};

export default SearchWithForm;
