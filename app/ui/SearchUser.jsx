import React from "react";

const SearchUser = () => {
  return (
    <>
      <div className="searchUser flex justify-evenly bg-white p-10 ">
        <input placeholder="Search Here" className="bg-white border w-full " />
        <button className="bg-slate-100 w-22  p-4 "> Search </button>
      </div>
    </>
  );
};

export default SearchUser;
