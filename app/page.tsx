import Link from "next/link";
import { PageHeader } from "@/components/page-header";

// Por ahora los valores son fijos; en la etapa 2 van a salir de la base de datos.
const stats = [
  { label: "Volumen procesado", value: "—" },
  { label: "Comisiones cobradas", value: "—" },
  { label: "Clientes activos", value: "—" },
];

const sections = [
  {
    href: "/clientes",
    title: "Clientes",
    description: "Los comercios que procesan pagos con nosotros.",
  },
  {
    href: "/planes",
    title: "Planes de comisión",
    description: "Porcentaje y cargo fijo que se cobra por cada movimiento.",
  },
  {
    href: "/transacciones",
    title: "Transacciones",
    description: "Cada pago procesado, con su comisión y el neto para el cliente.",
  },
  {
    href: "/estados",
    title: "Estados",
    description: "El estado de cada transacción.",
  }
];

export default function Home() {
  return (
    <>
      <PageHeader
        title="Panel general"
        description="Resumen de la actividad de la procesadora."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm text-zinc-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
          >
            <h2 className="font-medium">{section.title} →</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
