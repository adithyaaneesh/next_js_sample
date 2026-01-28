"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();

  return (
    <div>
      <h1>Product Detail {params.id}</h1>
    </div>
  );
}
