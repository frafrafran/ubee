import type { Metadata } from "next";
import { Shop } from "@/components/shop/shop";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Los productos que usamos en el salón. Armá tu pedido y coordinalo por WhatsApp para retirarlo en tu sucursal.",
};

export default function TiendaPage() {
  return <Shop />;
}
