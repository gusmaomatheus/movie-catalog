import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/";
import MovieDetais from "../components/pages/MovieDetails";
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
            </MovieProvider>
        </BrowserRouter>
    );
}
