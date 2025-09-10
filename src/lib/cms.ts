export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const API_BASE = import.meta.env.VITE_API_BASE || ""; // empty = same origin

async function api(path: string, method: HttpMethod = "GET", body?: any) {
  const res = await fetch(`${API_BASE}/.netlify/functions/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`${res.status} ${t}`);
  }
  return res.json();
}

export const cmsService = {
  // BLOG
  getBlogPosts: () => api("blog"),
  createBlogPost: (post: any) => api("blog", "POST", post),
  updateBlogPost: (post: any) => api("blog", "PUT", post),
  deleteBlogPost: (id: string) => api("blog", "DELETE", { id }),

  // BRANDS
  getBrands: () => api("brands"),
  createBrand: (brand: any) => api("brands", "POST", brand),
  updateBrand: (brand: any) => api("brands", "PUT", brand),
  deleteBrand: (id: string) => api("brands", "DELETE", { id }),

  // SUBSCRIBERS
  getEmailSubscribers: () => api("subscribers"),
  addEmailSubscriber: (sub: any) => api("subscribers", "POST", sub),

  // CONTACTS
  getContactSubmissions: () => api("contacts"),
  addContactSubmission: (c: any) => api("contacts", "POST", c),
  markContactAsRead: (id: string) => api("contacts", "PUT", { id, read: true }),

  // CAMPAIGNS
  getEmailCampaigns: () => api("campaigns"),
  addEmailCampaign: (c: any) => api("campaigns", "POST", c),
};