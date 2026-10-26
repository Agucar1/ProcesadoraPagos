import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Clientes" };

export default function ClientesPage() {
  return (
    <PageHeader
      title="Clientes"
      description="Los comercios que procesan pagos con nosotros. El listado llega en la etapa 2."
    />
  );
}
