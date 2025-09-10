// src/pages/BrandPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cmsService } from "../lib/cms";
import staticBrands from "../data/brandData"; // <-- default import

export default function BrandPage() {
  const params = useParams();
  const slug = params.slug as string | undefined;
  const [brand, setBrand] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      try {
        const list = await cmsService.getBrands();
        const hit = (list || []).find((b: any) => b.slug === slug);
        if (hit) { setBrand(hit); return; }
      } catch {}
      const listStatic = staticBrands as any[];
      setBrand(listStatic.find(b => b.slug === slug));
    })();
  }, [slug]);

  if (!slug) return <div className="p-6">No brand specified.</div>;
  if (!brand) return <div className="p-6">Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold">{brand.name}</h1>
      <p className="mt-2 opacity-80">{brand.overview}</p>
      {/* Extend with other fields as needed */}
    </div>
  );
}
