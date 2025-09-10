// src/pages/BrandPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cmsService } from "@/lib/cms";
import { brands as staticBrands } from "@/data/brandData";

export default function BrandPage() {
  const { slug } = useParams<{ slug: string }>();
  const [brand, setBrand] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const list = await cmsService.getBrands();
        const hit = (list || []).find((b: any) => b.slug === slug);
        if (hit) { setBrand(hit); return; }
      } catch {}
      setBrand(staticBrands.find(b => b.slug === slug));
    })();
  }, [slug]);

  if (!brand) return <div className="p-6">Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold">{brand.name}</h1>
      <p className="mt-2 opacity-80">{brand.overview}</p>
      {/* Extend with other fields as needed */}
    </div>
  );
}
