import { GetUserData } from "@/app/lib/data";
import { SearchData } from "@/app/lib/data";
import CreateUser from "@/app/ui/CreateUser";
import SearchUser from "@/app/ui/SearchUser";
import ShowUser from "@/app/ui/ShowUser";
import { Toaster } from "react-hot-toast";

const Create = async ({ searchParams }) => {
  const userData = await GetUserData();

  const name = searchParams?.name || "";

  const { search } = await SearchData(name);

  console.log(search);

  return (
    <>
      <h1 className="flex py-2 justify-center text-[50px] font-serif bg-white text-black ">
        Create User
      </h1>
      <p className="bg-white p-3 text-black text-md "> Click On This Icon :</p>
      <CreateUser />
      {/* ......... */}
      <SearchUser />

      {/* <div className="bg-white text-black p-5 ">
        <h1 className="text-black">Search Value :</h1>

        {search.map((val) => (
          <>
            <p className="text-black">{val.name}</p>
          </>
        ))}
      </div> */}

      <div className="p-[100px] flex justify-center flex-col bg-white">
        <b className="py-5 text-black ">Created Users:</b>

        <ShowUser data={userData} searchData={search} />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Create;
