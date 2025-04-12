import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import PaginaBase from "./pages/PaginaBase";
import NuevoProducto from "./pages/NuevoProducto";
import Stock from "./pages/Stock/Stock";


function AppRoutes() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Inicio />} />
              <Route path="/Stock" element={<Stock />} />
              <Route path="/NuevoProducto" element={ <NuevoProducto /> }/>
              <Route path=":id" element={<Player />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
