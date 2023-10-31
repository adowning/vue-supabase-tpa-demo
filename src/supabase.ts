import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qeuzoswgnrhrkoqdfbzb.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldXpvc3dnbnJocmtvcWRmYnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0NzQzNDIsImV4cCI6MjAwNzA1MDM0Mn0.BPHItOeyMdu8vs14limAlamRHNMzc6yKXiV2fPRpjmw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
