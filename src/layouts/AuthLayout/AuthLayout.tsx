import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/layouts/AuthLayout/app-sidebar"
import { SiteHeader } from "@/layouts/AuthLayout/site-header"
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


