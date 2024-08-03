import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jgjhpshbhcaroqitczhl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnamhwc2hiaGNhcm9xaXRjemhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5Mzc0OTQsImV4cCI6MjAzNzUxMzQ5NH0.SLX-Vj5i5SoJ6u0iV50_eIqXhvGYEjlfazX6WDurbdM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
