import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mippgrjetywmscjmpeva.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcHBncmpldHl3bXNjam1wZXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMzQ1NTUsImV4cCI6MjA3MTcxMDU1NX0.MHt138y3TZaxf4vpqKlzFLT8sOgnomcfoI65UC5Cv1E";

export const supabase = createClient(supabaseUrl, supabaseKey);
