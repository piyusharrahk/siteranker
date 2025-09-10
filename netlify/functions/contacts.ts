import type { Handler } from "@netlify/functions";
import { getSupabase } from "./_supabase";

export const handler: Handler = async (event) => {
  try {
    const supabase = getSupabase();
    const method = event.httpMethod;
    if (method === "GET") {
      const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    if (method === "POST") {
      const body = JSON.parse(event.body || "{}");
      const { data, error } = await supabase.from("contact_submissions").insert(body).select().single();
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    if (method === "PUT") {
      const body = JSON.parse(event.body || "{}");
      const { id, read } = body;
      const { data, error } = await supabase.from("contact_submissions").update({ read }).eq("id", id).select().single();
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    return { statusCode: 405, body: "Method Not Allowed" };
  } catch (e: any) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};