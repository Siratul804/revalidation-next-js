"use server";
//users
import { query } from "./db";
export async function GetUserData(request) {
      

  const users = await query({
    query: "SELECT * FROM user_name",
    values: [],
  });

  console.log(users)
  return users;
}
