"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive, navItems } from "@/lib/navigation";

// Dibuja los enlaces. Recibe la ruta activa por props, así se puede usar
// también sin saber la URL (como "fallback" mientras carga).
export function NavMenu({ pathname }: { pathname: string | null }) {
  return (
    <nav className="flex gap-1 overflow-x-auto md:flex-col">
      {navItems.map((item) => {
        const active = pathname !== null && isActive(item.href, pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

// usePathname lee la URL del navegador, por eso este archivo es "use client".
export function ActiveNavMenu() {
  const pathname = usePathname();
  return <NavMenu pathname={pathname} />;
}
