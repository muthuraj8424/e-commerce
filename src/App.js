import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cartpage from "./components/Cartpage";
import Navbar from "./components/Navbar";
import { reducer , initialState } from "./Context&Reducer/reducer";
import { ShopProvider } from "./Context&Reducer/StateContext";
function App() {
  return (
    <ShopProvider reducer = {reducer} initialState ={initialState}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
}

export default App;
