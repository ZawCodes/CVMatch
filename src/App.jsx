import "./reset.css";
import GlobalStates from "globalStates";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));

function App() {
  return (
    <>
      <GlobalStates>
        <BrowserRouter basename="/">
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/home/*" element={<Home />} />
              <Route path="" element={<Navigate to="/home" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </GlobalStates>
    </>
  );
}

export default App;
