import { createClient } from "@supabase/supabase-js";

const URL = "https://kzxdgnorxhvzmadginyz.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eGRnbm9yeGh2em1hZGdpbnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwOTYzOTMsImV4cCI6MjAwNjY3MjM5M30.hHBx5aMG6eoDjhSOyYTic12Ms5dKed35xx9BZ2S54Qs";
export const supabase = createClient(URL, API_KEY);
