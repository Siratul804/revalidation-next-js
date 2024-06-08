"use server";
import { query } from "./db";
import { revalidatePath } from "next/cache";
import cron from "node-cron";

export const addUser = async (name, email) => {
  console.log(name, email);

  try {
    const user = await query({
      query: "SELECT name FROM user_name WHERE name = (?)",
      values: [name],
    });

    if (user[0]) {
      throw new Error("Failed to delete product!");
    }

    const newUser = await query({
      query: "INSERT INTO user_name (name) VALUES (?)",
      values: [name],
    });

    console.log(newUser);
  } catch (err) {
    return {
      message: "Name Exits",
    };
  }

  revalidatePath("/ctrl/create");
  return {
    message: "Name aise",
  };
};

export const deleteUser = async (prevState, formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    const deleteMember = await query({
      query: "DELETE FROM user_name WHERE id = (?)",
      values: [id],
    });

    console.log(deleteMember);
  } catch (err) {
    console.log(err);
    return {
      message: "failed delete",
    };
  }

  revalidatePath("/ctrl/create");

  return {
    message: "deleted",
  };
};

export const updateUser = async (prevState, formData) => {
  const { id, name } = Object.fromEntries(formData);

  console.log(name);

  try {
    const newUser = await query({
      query: "UPDATE user_name SET  name = ? WHERE id = ?",
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
  const view = formData.get("view") === null ? "off" : "on";
  // const view = formData.get("view") === null ? false : true ;

  console.log(view);

  try {
    const newRole = await query({
      query: "INSERT INTO permission (view) VALUES (?)",
      values: [view],
    });

    console.log(newRole);
  } catch (err) {
    console.log(err);
    return {
      message: "wrong",
    };
  }

  revalidatePath("/ctrl/role");
  return {
    message: "added",
  };
};

// Function to add an invoice
// Function to add an invoice
export const addInvoice = async (prevState = {}, formData = {}) => {
  const { due_amount } = formData;

  const now = new Date().toISOString().split("T")[0];
  const status = "Unpaid";

  console.log(due_amount, now, status);

  try {
    console.log("Attempting to add invoice...");
    const newInvoice = await query({
      query:
        "INSERT INTO Invoice (start_date, due_amount, status) VALUES (?,?,?)",
      values: [now, due_amount, status],
    });

    console.log("Invoice added:", newInvoice);
  } catch (err) {
    console.error("Error adding invoice:", err);
    return {
      message: "Invalid",
    };
  }

  try {
    await revalidatePath("/ctrl/invoice");
    console.log("Path revalidated.");
  } catch (err) {
    console.error("Error revalidating path:", err);
  }

  return {
    message: "Valid",
  };
};

// Schedule a cron job to run every second
cron.schedule("* * * * * *", async () => {
  console.log("Running addInvoice task every second");

  try {
    const formData = { due_amount: 5000.0 }; // Example form data
    const result = await addInvoice({}, formData);
    console.log("Invoice result:", result);
  } catch (error) {
    console.error("Error in addInvoice task:", error);
  }
});

console.log("Cron job initialized.");
