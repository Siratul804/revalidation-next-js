"use server";
//users
import { query } from "./db";
import cron from "node-cron";
// export async function GetUserData(request) {

//   const users = await query({
//     query: "SELECT * FROM user_name",
//     values: [],
//   });

//   return users;
// }

export const searchForm = async (prevState, formData) => {
  if (!formData) {
    throw new Error("Invalid formData");
  }

  const { name } = Object.fromEntries(formData);

  console.log(name);

  const searchData = await query({
    query: "SELECT * FROM user_name WHERE `name` LIKE ?",
    values: [`%${name}%`],
  });

  return { searchData };
};

export async function GetUserData() {
  const users = await query({
    query: "SELECT * FROM user_name",
    values: [],
  });

  return users;
}

// Schedule a cron job to run every minute
cron.schedule("* * * * * *", async () => {
  console.log("Running Get Data task every Min");

  try {
    const users = await GetUserData();
    console.log("Fetched user data:", users);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});
