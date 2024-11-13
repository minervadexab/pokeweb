import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import ThemeSwitcher from "../component/ThemeSwitcher";
import ThemeContext, { ThemeProvider } from "../context/ThemeContext";

export default function mainlayout() {
    return (
    <>
    <ThemeProvider>
    <Navbar />
    <Outlet />
    <Footer />
    </ThemeProvider>
    </>
    );
}