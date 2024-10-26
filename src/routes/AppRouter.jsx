import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/";
import Header from "../components/ui/Header";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
