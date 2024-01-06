"use server";
import { query } from "./db";
import { revalidatePath } from "next/cache";


export const addUser = async (name, email) => {
  
  console.log(name,email)

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
      message: 'Name aise',
     
    }

  };
  

  export const deleteUser = async (prevState,formData) => {
    const { id } = Object.fromEntries(formData);

    try{
      const deleteMember = await query({
        query: "DELETE FROM user_name WHERE id = (?)",
        values: [id],
      });

      console.log(deleteMember)

    } catch (err) {
      console.log(err)
      return {
        message: 'failed delete',
      }
    }
  
    revalidatePath("/ctrl/create")
   
    return {
      message: 'deleted',
    }
   
  };

  export const updateUser = async (prevState, formData) => {
    const { id, name} =
      Object.fromEntries(formData);
  
      console.log(name)

    try {
      const newUser = await query({
        query:
          "UPDATE user_name SET  name = ? WHERE id = ?",
        values: [name, id],
      });
  
      console.log(newUser);
    } catch (err) {
      console.log(err);
      return {
        message: "Failed",
      };
    }
  
    revalidatePath("/ctrl/create");
    return {
      message: "Updated",
    };
  };


  //permission 

  export const addRole = async (prevState, formData) => {
   
    const view = formData.get("view") === null ? "off" : "on" ;
    // const view = formData.get("view") === null ? false : true ;
  
      console.log(view)

      
      try {
      const newRole = await query({
        query:
          "INSERT INTO permission (view) VALUES (?)",
        values: [view],
      });

      console.log(newRole);
    } catch (err) {
      console.log(err)
      return {
        message: 'wrong',
      }
      
    }
  
    revalidatePath("/ctrl/role")
    return {
      message: 'added',
    }

  };