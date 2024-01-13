import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Work } from "./pages/Work";
import { Blog } from "./pages/Blog";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
            </Route>
        </Routes>
    )
}