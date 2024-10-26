import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/";
import MovieDetais from "../components/pages/MovieDetails";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { MovieProvider } from "../contexts/MovieContext";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <MovieProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<MovieDetais />} />
                </Routes>
                <Footer />
            </MovieProvider>
        </BrowserRouter>
    );
}
