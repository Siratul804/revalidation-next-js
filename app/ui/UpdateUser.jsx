"use client";
import { useFormState, useFormStatus } from "react-dom";
import { MdModeEdit } from "react-icons/md";
import { updateUser } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const UpdateUser = ({ id, name }) => {
  const initialState = {
    message: "",
    updatedName: name,
  };
  const [state, formAction] = useFormState(updateUser, initialState);
  const [updatedName, setUpdatedName] = useState(name);
  useEffect(() => {
    if (state?.message === "Updated") {
      toast.success("Name Updated ");
      document.getElementById(id).close();
    } else if (state?.message === "Failed") {
      toast.error("Failed to Update Name");
    }
  }, [state]);

  const handleChange = (event) => {
    setUpdatedName(event.target.value); // Update updatedName state
  };

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[35vh] rounded-md "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update User"}
      </button>
    );
  }

  return (
    <div>
      <div className="flex justify-start ">
        <button
          className="p-2 hover:bg-slate-100 rounded-full "
          onClick={() => document.getElementById(id).showModal()}
        >
          <MdModeEdit size={16} color="black" />
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id={id} className="modal">
        <div className="modal-box bg-white max-w-[80vh] ">
          <div className="py-2">
            {/* //inside content// */}
            <div className="">
              <div className="">
                <div className="flex justify-between ">
                  <h1 className="text-xl  text-black "> Update User</h1>
                  <div>
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-4  text-black   ">
                        ✕
                      </button>
                    </form>
                  </div>
                </div>
                <div className="py-3">
                  <hr />
                </div>
              </div>
              <section className="flex justify-center">
                <form action={formAction}>
                  <input type="hidden" name="id" value={id} />
                  <main className="pr-1">
                    <label className="label">
                      <span className="text-[black]  text-sm"> Name </span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      value={updatedName} // Use updatedName in value
                      onChange={handleChange} // Add onChange event
                      required
                      autocomplete="off"
                      // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                      className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    />
                  </main>

                  <br />
                  <div className="flex justify-center ">
                    <label>
                      <Submit />
                    </label>
                  </div>
                  <div className="flex justify-end ">
                    {state?.message === "Failed" ? (
                      <>
                        <p className="text-red-500"> Failed To Update! </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUser;
