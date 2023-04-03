import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gyopbapltqlgejbtzdcd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5b3BiYXBsdHFsZ2VqYnR6ZGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzE5MzEsImV4cCI6MTk5MzcwNzkzMX0.aKf3cITkn_6eSzWYXFpEsRH8Lu6lwTgu03CAZ-4AD7M';

export const supabase = createClient(supabaseUrl, supabaseKey)