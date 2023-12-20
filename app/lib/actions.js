"use server";
import { query } from "./db";
import { revalidatePath } from "next/cache";


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
      return {
        message: 'Name Exits',
      }
      
    }
  
    revalidatePath("/ctrl/create")
    return {
      message: 'Name Added',
    }

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
    revalidatePath("/ctrl/create")
  };