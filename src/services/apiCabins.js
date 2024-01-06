import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

//fn to create cabin

export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // A For Create

  if (!id) query.insert([{ ...newCabin, image: imagePath }]);

  //B For  Edit
  if (id) const { data, error } = await query.select().single();
  

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // after create cabin is successfull upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete the cabin if there waserror uploading image

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Image could not be uploaded");
  }

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
}

//fn to delete cabin

export default async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
}
