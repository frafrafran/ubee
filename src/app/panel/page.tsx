import type { Metadata } from "next";
import { Agenda } from "@/components/panel/agenda";

export const metadata: Metadata = {
  title: "Panel del salón",
  robots: { index: false, follow: false },
};

export default function PanelPage() {
  return <Agenda />;
}
