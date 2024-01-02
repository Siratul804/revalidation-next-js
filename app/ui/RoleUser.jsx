"use client";
import { addRole } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import React, { useState } from "react";

const RoleUser = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral w-wide text-white "
        disabled={pending}
      >
        {pending ? "Creating..." : "Create Role "}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addRole, initialState);

  useEffect(() => {
    console.log(state);

    if (state?.message === "added") {
      toast.success("Role Added");
    } else if (state?.message === "wrong") {
      toast.error("Something Wrong");
    }
  }, [state]);

  return (
    <>
      <div className="bg-white py-[40vh] ">
        <h1 className="p-3 text-black "> Create Role : </h1>
        <br />
        <form action={formAction} className="p-3">
          <div className="flex">
            <input
              type="checkbox"
              name="view"
              value={isChecked}
              checked={isChecked}
              onChange={handleChange}
            />
            <p className="pl-2">View</p>
          </div>
          <br />
          <p>Value: {isChecked ? "on" : "off"}</p>

          <Submit />
        </form>
      </div>
    </>
  );
};

export default RoleUser;
