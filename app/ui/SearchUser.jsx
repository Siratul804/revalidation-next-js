import React from "react";

const SearchUser = () => {
  return (
    <>
      <div className="searchUser flex justify-evenly bg-white ">
        <input placeholder="Search Here" className="bg-white border p-2 " />
        <button className="bg-slate-100 w-22  p-4 "> Search </button>
      </div>
    </>
  );
};

export default SearchUser;
