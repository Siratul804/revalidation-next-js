"use server";
import { revalidateTag } from "next/cache";
//users
import { query } from "./db";
export async function GetUserData(request) {
      

  const users = await query({
    query: "SELECT * FROM user_name",
    values: [],
  });

  
  revalidateTag("create-name");
  revalidateTag("delete-name");
  console.log(users)
  return users;
}
