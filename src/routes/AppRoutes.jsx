// src/AppRoutes.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"; // Ensure path is correct
import Homepage from '../pages/Homepage';       // Ensure path is correct
import Pokemon from "../pages/Pokemon";
import PokemonDetail from "../pages/PokemonDetail";
import Login from "../pages/login";
// import Login from "../pages/Login";
       // Ensure path is correct

export default function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="homepage" element={<Homepage />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/:id" element={<PokemonDetail />} />
      </Route>
    </Routes>
  );
}
