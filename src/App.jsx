import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
library.add(faXmark);

// Import components
import Header from "./components/Header";
import ModalSignUp from "./components/ModalSignUp";
import ModalLogin from "./components/ModalLogin";

// Import Pages
import Welcome from "./pages/Welcome";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Bookmark from "./pages/Bookmark";

function App() {
  const [warning, setWarning] = useState(0);
  const [visibility, setVisibility] = useState([false, false]);
  const [myToken, setMyToken] = useState(Cookies.get("myToken") || "");
  return (
    <Router>
      <Header
        myToken={myToken}
        setMyToken={setMyToken}
        setVisibility={setVisibility}
      />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/characters" element={<Characters />} />
        <Route
          path="/comics/:characterId"
          element={<Character myToken={myToken} setWarning={setWarning} />}
        />
        <Route
          path="/comics"
          element={
            <Comics
              myToken={myToken}
              warning={warning}
              setVisibility={setVisibility}
              setWarning={setWarning}
            />
          }
        />
        <Route path="/bookmark" element={<Bookmark myToken={myToken} />} />
      </Routes>
      {visibility[0] && (
        <ModalSignUp setVisibility={setVisibility} setMyToken={setMyToken} />
      )}
      {visibility[1] && (
        <ModalLogin setVisibility={setVisibility} setMyToken={setMyToken} />
      )}
    </Router>
  );
}

export default App;
