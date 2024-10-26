"use client";

import * as m from "@/paraglide/messages";
import { Logo } from "@/components/Logo/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, usePathname } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { CogIcon, HomeIcon, ListCheck } from "lucide-react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();

  return (
    <section className="min-w-screen min-h-screen flex">
      <nav className="w-[400px] flex flex-col p-6 gap-10">
        <Logo />

        <div className="w-full rounded-lg border-[1px] p-3 flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <p className="font-semibold">Nome da empresa</p>
            <p className="text-sm">Nome do usuário</p>
          </div>
        </div>

        <div className="flex flex-1 gap-5">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/dashboard"
                className={cn(
                  "flex items-center gap-3",
                  currentPath === "/dashboard" ? "font-bold" : ""
                )}
              >
                <HomeIcon />
                {m.navDashboard()}
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/fila-de-atendimento"
                className={cn(
                  "flex items-center gap-3",
                  currentPath === "/dashboard/fila-de-atendimento"
                    ? "font-bold"
                    : ""
                )}
              >
                <ListCheck />
                {m.navQueue()}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/dashboard/configuracoes"
                className="flex items-center gap-3"
              >
                <CogIcon />
                {m.navSettings()}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-1 font-[family-name:var(--font-geist-sans)] flex justify-center p-10">
        {children}
      </main>
    </section>
  );
}
