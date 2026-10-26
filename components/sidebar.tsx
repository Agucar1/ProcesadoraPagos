import Link from "next/link";
import { Suspense } from "react";
import { ActiveNavMenu, NavMenu } from "./nav-menu";

// Server Component: no lleva "use client", se renderiza en el servidor.
export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 border-b border-zinc-200 bg-white p-4 md:w-60 md:shrink-0 md:border-r md:border-b-0 dark:border-zinc-800 dark:bg-zinc-950">
      <Link href="/" className="px-3 text-lg font-semibold tracking-tight">
        Procesadora de Pagos
      </Link>
      {/* Con cacheComponents activado, usePathname puede "suspender" en rutas
          dinámicas (ej. /clientes/[id]). Suspense muestra el menú sin resaltar
          mientras tanto, y el resto de la página se sigue pre-renderizando. */}
      <Suspense fallback={<NavMenu pathname={null} />}>
        <ActiveNavMenu />
      </Suspense>
    </aside>
  );
}
