import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/Layout/Layout"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import HomePage from "./pages/Home"
import ProjectsPage from "./pages/Projects"
import './styles.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route 
                        path="/" 
                        element={<HomePage />} 
                    />
                    <Route 
                        path="/about" 
                        element={<AboutPage />} 
                    />
                    <Route 
                        path="/projects" 
                        element={<ProjectsPage />} 
                    />
                    <Route 
                        path="/contact" 
                        element={<ContactPage />} 
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
