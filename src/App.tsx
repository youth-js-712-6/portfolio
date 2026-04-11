import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/Layout/Layout"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import HomePage from "./pages/Home"
import ProjectsPage from "./pages/Projects"
import "@radix-ui/themes/styles.css";
import './styles.css'
import { Theme, ThemePanel } from "@radix-ui/themes"

const savedTheme = JSON.parse(localStorage.getItem('theme') || '{}')

const App = () => {
    return (
        <Theme 
            accentColor="ruby" 
            radius="full" 
            appearance="dark" 
            {...savedTheme}
        >
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
        </Theme>
    )
}

export default App
