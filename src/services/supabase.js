import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eqcsmpoinpqntfvqpgqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxY3NtcG9pbnBxbnRmdnFwZ3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNDI3MTksImV4cCI6MjA2OTcxODcxOX0.igzS0JTg66FrxcdPY677mW8gokftOc-1eKU-q9md4YQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
