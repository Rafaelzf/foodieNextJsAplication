"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { deleteItem as deleteItemFromDB } from "@/connection/meals";

export async function deleteItem(id) {
  if (!id) return;
  await deleteItemFromDB(id);
  revalidatePath(`/meals`);
  redirect("/meals");
}
