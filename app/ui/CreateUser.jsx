"use client";
import { IoCreateOutline } from "react-icons/io5";
import { addUser } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

const CreateUser = () => {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral"
        disabled={pending}
      >
        {pending ? "Creating..." : "Create"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addUser, initialState);

  useEffect(() => {
    if (state?.message === "Name Added") {
      document.getElementById("my_modal_3").close();
      toast.success("Name Added");
    } else if (state?.message === "Name Exits") {
      toast.error("Name Exits");
    }
  }, [state]);

  return (
    <>
      <div className=" p-4 flex justify-center bg-white">
        <div className="py-24">
          <button
            className="btn bg-white border-none hover:bg-white "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <h1>
              <IoCreateOutline size={55} color="red" />
            </h1>
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white max-w-[80vh]  ">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black ">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-black flex justify-center ">
                Create User
              </h3>
              <div className="flex justify-center">
                <section className="flex justify-center">
                  <form
                    action={async (formData) => {
                      const name = formData.get("name");
                      await formAction(name);
                    }}
                  >
                    <div className="flex justify-between sm:flex-row flex-col  ">
                      <main className="pr-1">
                        <label className="label">
                          <span className="text-[black] text-sm"> Name </span>
                        </label>
                        <input
                          type="text"
                          placeholder="name"
                          name="name"
                          required
                          autocomplete="off"
                          className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                        />
                      </main>
                    </div>
                    <br />
                    <div>
                      <Submit />
                      <div className="flex justify-end ">
                        {state?.message === "Name Exits" ? (
                          <>
                            <p className="text-red-500">Error</p>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
