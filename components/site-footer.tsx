import * as React from "react";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
         {/*  <Icons.logo /> */}
          <p className="text-center text-sm leading-loose md:text-left">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/abner-lima-oliveira/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Abner Oliveira
            </a>
            , usuário do{" "}
            <a
              href="https://www.issec.ce.gov.br/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              ISSEC
            </a>
            .{" "}
            {/* Hospedado na{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . */}
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
