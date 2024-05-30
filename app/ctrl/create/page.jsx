import { GetUserData } from "@/app/lib/data";
import CreateUser from "@/app/ui/CreateUser";
import SearchUser from "@/app/ui/SearchUser";
import ShowUser from "@/app/ui/ShowUser";
import { Toaster } from "react-hot-toast";

const Create = async () => {
  const userData = await GetUserData();

  return (
    <>
      <h1 className="flex py-2 justify-center text-[50px] font-serif bg-white text-black ">
        Create User
      </h1>
      <p className="bg-white p-3 text-black text-md text-center ">
        {" "}
        Click On This Icon :
      </p>
      <CreateUser />
      {/* ......... */}
      <SearchUser />
      {/* ......... */}

      <div className=" flex justify-center flex-col bg-white">
        <b className=" text-black text-center ">Created Users:</b>
        <ShowUser data={userData} />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Create;
