import { DashboardHeader } from "@/components/header";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="md:px-20">
          <DashboardHeader/>
          {children}          
        </div>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
