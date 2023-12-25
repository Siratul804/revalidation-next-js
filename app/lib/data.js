"use server";
//users
import { query } from "./db";
export async function GetUserData(request) {
      

  const users = await query({
    query: "SELECT * FROM user_name",
    values: [],
  });

  
  return users;
}


export async function SearchData(prevState, formData) {
  const { name } = Object.fromEntries(formData);
  console.log(name)
  const queryStr = name ? "SELECT * FROM user_name WHERE `name` LIKE ?" : "SELECT * FROM user_name";
  const values = name ? [`%${name}%`] : [];

  const searchData = await query({
    query: queryStr,
    values: values,
  });

  console.log(searchData)
  return searchData;
}