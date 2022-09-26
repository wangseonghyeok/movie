import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Detail from "./components/Detail";
import SearchResult from "./components/SearchResult";
import ProfileDetail from "./components/ProfileDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/profile/:personId" element={<ProfileDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
