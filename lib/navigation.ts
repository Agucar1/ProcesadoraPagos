// Secciones del menú lateral. Agregar una sección nueva es agregar una línea acá
// (y crear su carpeta en app/).
export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/clientes", label: "Clientes" },
  { href: "/planes", label: "Planes de comisión" },
  { href: "/transacciones", label: "Transacciones" },
  { href: "/estados", label: "Estados" },
];

// "/" solo está activo en la página de inicio; el resto también en sus subpáginas
// (por ejemplo, /clientes/42 marca "Clientes").
export function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
