import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
