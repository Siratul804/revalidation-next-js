"use server";
import { query } from "./db";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (prevState, name) => {
   
    try {
      const user = await query({
        query: "SELECT name FROM user_name WHERE name = (?)",
        values: [name],
      });
  

      if (user[0]) {
        throw new Error("Failed to delete product!");
  
      }
  
      const newUser = await query({
        query:
          "INSERT INTO user_name (name) VALUES (?)",
        values: [name],
      });

      console.log(newUser);
    } catch (err) {
      return "User Already Exits"
      
    }
  
    revalidateTag("create-name");
    redirect("/");

  };
  

  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    const deleteMember = await query({
      query: "DELETE FROM user_name WHERE id = (?)",
      values: [id],
    });
  
    if (deleteMember) {
      console.log("user deleted");
    }
    revalidateTag("delete-name");
    redirect("/ctrl/create");
  };