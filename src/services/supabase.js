import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://flwzupelxbudovspowdf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsd3p1cGVseGJ1ZG92c3Bvd2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwODQ1MzIsImV4cCI6MjAxNjY2MDUzMn0.E8nXavJMrCBm6qKSCS-KG9id7JEyuzCBL0ATyEhUM-M";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
