import { createClient } from "@supabase/supabase-js";

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);


// NEXT_PUBLIC_SUPABASE_URL=https://ghrmnmlziqalnwytddfl.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdocm1ubWx6aXFhbG53eXRkZGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5ODcyNTUsImV4cCI6MjA4NzU2MzI1NX0.K5u54q0oQXF8s4iMPj6qdHe5Sk5RFrFcJqbPRntpeK8