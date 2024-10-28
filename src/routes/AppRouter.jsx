import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMovie from "../components/pages/CreateMovie";
import DeleteMovie from "../components/pages/DeleteMovie";
import Home from "../components/pages/Home/";
import Layout from "../components/pages/Layout";
import MovieDetais from "../components/pages/MovieDetails";
import NotFound from "../components/pages/NotFound";
import UpdateMovie from "../components/pages/UpdateMovie";
import { MovieProvider } from "../contexts/MovieContext";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <MovieProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:id" element={<MovieDetais />} />
                        <Route path="/create" element={<CreateMovie />} />
                        <Route path="/update" element={<UpdateMovie />} />
                        <Route path="/delete" element={<DeleteMovie />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </MovieProvider>
        </BrowserRouter>
    );
}
