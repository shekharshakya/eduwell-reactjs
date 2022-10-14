import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./pages/Homepage.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Servicepage from "./pages/Servicepage";
import Scrolltop from "./component/Scrolltop.jsx";
import Thankyou from "./component/Thankyou.jsx";
import { useState, useEffect } from "react";
import LoadingScreen from "./component/LoadingScreen.jsx";
import Errorpage from "./pages/Errorpage.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading === false ? (
        <>
          <Scrolltop />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route exact path="/aboutuspage" element={<Aboutus />} />
              <Route exact path="/contactpage" element={<Contactpage />} />
              <Route exact path="/servicepage" element={<Servicepage />} />
              <Route exact path="/thankyoupage" element={<Thankyou />} />
              <Route exact path="*" element={<Errorpage/>} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
