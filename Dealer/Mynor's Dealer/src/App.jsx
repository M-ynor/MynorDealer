import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home, Search, Contact, Cart, Gallery } from "./Pages/index";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" Component={Home} />
          <Route path="/Search" Component={Search} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Cart" Component={Cart} />
          <Route path="/Gallery" Component={Gallery} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
