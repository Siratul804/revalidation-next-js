"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchUser = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearchName = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set("name", e.target.value);

    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div className=" p-4 flex justify-center bg-white text-black ">
        <input
          type="text"
          placeholder="Type here"
          name="name"
          defaultValue=""
          onChange={handleSearchName}
          className="input input-bordered bg-white input-sm w-full max-w-xs"
        />
      </div>
      <div className=" p-0 flex justify-center bg-white text-black ">
        <button className="btn btn-sm btn-neutral w-[300px] text-white ">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchUser;
