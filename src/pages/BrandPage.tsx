// src/pages/BrandPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cmsService } from "../lib/cms";
import * as BrandModule from "../data/brandData";
// Helper to load static brands whether brandData.ts exports default or named.
// We import the whole module and pick .default or .brands as available.

const staticBrandsAny = (BrandModule as any);
const STATIC_BRANDS = (staticBrandsAny.default ?? staticBrandsAny.brands ?? []) as any[];

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
      } catch { }
      setBrand((STATIC_BRANDS as any[]).find(b => b.slug === slug));
    })();
  }, [slug]);

  if (!slug) return <div className="p-6">No brand specified.</div>;
  if (!brand) return <div className="p-6">Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold">{brand.name}</h1>
      <p className="mt-2 opacity-80">{brand.overview}</p>
    </div>
  );
}
