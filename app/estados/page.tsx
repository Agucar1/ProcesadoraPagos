import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Estados" };

export default function EstadosPage() {
  return (
    <PageHeader
      title="Estados"

      description="los comercios tienen estados, esto se habiltiara tambien en otras secciones."
    />
  );
}
