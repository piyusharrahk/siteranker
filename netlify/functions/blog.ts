import type { Handler } from "@netlify/functions";
import { getSupabase } from "./_supabase";

export const handler: Handler = async (event) => {
  try {
    const supabase = getSupabase();
    const method = event.httpMethod;
    if (method === "GET") {
      const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    if (method === "POST") {
      const body = JSON.parse(event.body || "{}");
      const { data, error } = await supabase.from("blog_posts").insert(body).select().single();
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    if (method === "PUT") {
      const body = JSON.parse(event.body || "{}");
      const id = body.id;
      delete body.id;
      const { data, error } = await supabase.from("blog_posts").update(body).eq("id", id).select().single();
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    if (method === "DELETE") {
      const { id } = JSON.parse(event.body || "{}");
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }
    return { statusCode: 405, body: "Method Not Allowed" };
  } catch (e: any) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};