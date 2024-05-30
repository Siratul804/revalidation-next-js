"use client";
import { deleteUser } from "@/app/lib/actions";
import { MdDelete } from "react-icons/md";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import UpdateUser from "./UpdateUser";

const ShowUser = ({ data, searchData }) => {
  console.log(searchData);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? (
          <>
            <MdDelete size={15} color="red" />
          </>
        ) : (
          <>
            <MdDelete size={15} color="blue" />
          </>
        )}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(deleteUser, initialState);

  useEffect(() => {
    if (state?.message === "deleted") {
      toast.success("Name Deleted");
    } else if (state?.message === "failed delete") {
      toast.error("Failed to Delete Name");
    }
  }, [state]);

  return (
    <>
      {data.map((val) => (
        <>
          <div key={val.id} className="flex justify-center flex-wrap">
            <form action={formAction} className="flex py-2 ">
              <input type="hidden" name="id" value={val.id} />
              <p className="text-green-400">{val.name}</p>
              <div className="px-2"></div>
              <Submit />
            </form>
            <UpdateUser name={val.name} id={val.id} />
          </div>
        </>
      ))}
    </>
  );
};

export default ShowUser;
