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



export const searchForm = async (prevState, formData) => {

  if(!formData) {
    throw new Error('Invalid formData');
  }

  const { name } =
    Object.fromEntries(formData);
 
   console.log(name)

    const searchData = await query({
      query:
        "SELECT * FROM user_name WHERE `name` LIKE ?",
      values: [`%${name}%`],
    });
  
    
    return {searchData};

};