// src/pages/HomePage.tsx
import { useEffect, useState } from "react";
import { cmsService } from "../lib/cms";
import staticBrands from "../data/brandData"; // <-- default import

type Brand = {
  id?: string;
  name: string;
  slug: string;
  rating?: number;
  price?: string;
  overview?: string;
  color?: string;
  logo?: string;
};

export default function HomePage() {
  const [brands, setBrands] = useState<Brand[]>(staticBrands as Brand[]);

  useEffect(() => {
    (async () => {
      try {
        const dbBrands: Brand[] = await cmsService.getBrands();
        const bySlug = new Map<string, Brand>();
        for (const b of (staticBrands as Brand[])) bySlug.set(b.slug, b);
        for (const b of (dbBrands || [])) if (!bySlug.has(b.slug)) bySlug.set(b.slug, b);
        setBrands(Array.from(bySlug.values()));
      } catch {
        // ignore API errors; static stays
      }
    })();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Top Brands</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <a key={b.slug} href={`/brand/${b.slug}`} className="rounded-2xl border p-4 hover:shadow">
            <div className="flex items-center gap-3 mb-2">
              {b.logo ? (
                <img src={b.logo} alt={b.name} className="w-10 h-10 rounded" />
              ) : (
                <div className="w-10 h-10 rounded" style={{ background: b.color || "#eee" }} />
              )}
              <div className="font-medium">{b.name}</div>
            </div>
            <div className="text-sm opacity-80">{b.overview || "—"}</div>
            <div className="mt-2 text-xs opacity-70">
              {b.rating ? `⭐ ${b.rating.toFixed(1)}  • ` : ""}{b.price || ""}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
