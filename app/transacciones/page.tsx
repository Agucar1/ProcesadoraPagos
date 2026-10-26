import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Transacciones" };

export default function TransaccionesPage() {
  return (
    <PageHeader
      title="Transacciones"
      description="Cada pago procesado, con su comisión y el neto para el cliente. Se arma en la etapa 4."
    />
  );
}
