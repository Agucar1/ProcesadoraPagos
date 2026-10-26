import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Planes de comisión" };

export default function PlanesPage() {
  return (
    <PageHeader
      title="Planes de comisión"
      description="Porcentaje y cargo fijo que se cobra por movimiento. Se arma en la etapa 3."
    />
  );
}
