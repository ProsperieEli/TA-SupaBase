const SUPABASE_URL = 'https://yojgdmyvjpqnuratcdst.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamdkbXl2anBxbnVyYXRjZHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTQ2NTYsImV4cCI6MTk2Nzg3MDY1Nn0.ds1iX5huKxHOCL1B9Yu3zttPkmSu-AZPd25SQ7iLLow';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getGames() {
const resp = await client.from('game_favorites').select('*');

return resp.data;
}

export async function getGame(id) {
    const resp = await client.from('game_favorites').select('*').match({id}).single();

    return resp.data;
}