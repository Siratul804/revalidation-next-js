"use client";
import { SearchData } from "@/app/lib/data";
import { useFormState, useFormStatus } from "react-dom";
const SearchUser = () => {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral w-[300px] text-white "
        disabled={pending}
      >
        {pending ? "Creating..." : "Create"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(SearchData, initialState);

  console.log(state);

  return (
    <>
      <form action={formAction}>
        <div className=" p-4 flex justify-center bg-white text-black ">
          <input
            type="text"
            placeholder="Type here"
            name="name"
            defaultValue=""
            className="input input-bordered bg-white input-sm w-full max-w-xs"
          />
        </div>
        <div className=" p-0 flex justify-center bg-white text-black ">
          <Submit />
        </div>
      </form>
    </>
  );
};

export default SearchUser;
