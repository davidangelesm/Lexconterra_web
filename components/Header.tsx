"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, whatsappUrl } from "@/data/site";
export function Header({ brand }: { brand: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    setServices(false);
  };
  const item = ([label, href]: readonly [string, string]) => (
    <Link
      key={href}
      href={href}
      aria-current={path === href ? "page" : undefined}
      onClick={close}
    >
      {label}
    </Link>
  );
  return (
    <header
      className="header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="LEXCONTERRA GROUP — Inicio"
          onClick={close}
        >
          {brand}
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.slice(0, 2).map(item)}
          <div
            className="dropdown"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setServices(false);
            }}
          >
            <button
              className={
                path.includes("practica") || path.includes("espacios")
                  ? "active"
                  : ""
              }
              aria-expanded={services}
              aria-controls="services-menu"
              onClick={() => setServices(!services)}
            >
              Servicios <ChevronDown size={13} />
            </button>
            {services && (
              <div id="services-menu" className="dropdown-panel">
                {navigation.slice(2, 4).map(item)}
              </div>
            )}
          </div>
          {navigation.slice(4).map(item)}
          <a href={whatsappUrl()} className="button header-cta">
            Solicitar consulta <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
