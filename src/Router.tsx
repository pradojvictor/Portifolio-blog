import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Work } from "./pages/Work";
import { Blog } from "./pages/Blog";
import Post from "./pages/Post";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
            </Route>
        </Routes>
    )
}