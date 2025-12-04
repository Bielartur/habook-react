import { AppRoutes } from "./AppRoutes.tsx";
import {BrowserRouter} from "react-router";


export const App = () => {
  return (
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
  )
}