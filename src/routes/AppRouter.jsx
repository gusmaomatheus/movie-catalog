import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/";
import Header from "../components/ui/Header";
import { MovieProvider } from "../contexts/MovieContext";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <MovieProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MovieProvider>
        </BrowserRouter>
    );
}
