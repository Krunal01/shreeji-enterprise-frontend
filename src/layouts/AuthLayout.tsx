import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/pages/dashboard/components/app-sidebar"
import { SiteHeader } from "@/pages/dashboard/components/site-header"
import { Outlet } from "react-router-dom"

const AuthLayout: React.FC = () => {
    return (
        <>
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
                    <div className="flex flex-1 flex-col"><Outlet /></div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
export default AuthLayout


