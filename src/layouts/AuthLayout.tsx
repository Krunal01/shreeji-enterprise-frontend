import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/pages/dashboard/components/app-sidebar"
import { SiteHeader } from "@/pages/dashboard/components/site-header"
import { Outlet } from "react-router-dom"

const AuthLayout: React.FC = () => {
    return (
        <>
            <SidebarProvider
                defaultOpen={true}
            >
                <AppSidebar />
                <SidebarInset>
                    <SiteHeader />
                    <main>
                        <Outlet />
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
export default AuthLayout


