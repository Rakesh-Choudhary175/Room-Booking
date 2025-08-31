import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vvwvzhycvbgwnaiddhfj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2d3Z6aHljdmJnd25haWRkaGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2MTgwNjEsImV4cCI6MjA3MjE5NDA2MX0.i-7lcmEpSUVoOspZQ4QLYQ8TPgt3mk5RnYHctWo-qF8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
