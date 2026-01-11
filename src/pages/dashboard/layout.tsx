
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/layouts/AuthLayout/app-sidebar"
import { SiteHeader } from "@/layouts/AuthLayout/site-header"

// import "@/app/(examples)/dashboard/theme.css"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <SidebarProvider
      defaultOpen={true}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
