import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Calculator = lazy(() => import("./components/Calculator"));
const Table = lazy(() => import("./components/Table"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/income-details" element={<Table />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
