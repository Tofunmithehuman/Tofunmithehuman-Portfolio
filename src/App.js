import "./App.css";
import Home from "./Pages/Home";
import Loading from "./Components/Loading";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Loading /> : <Home />}</div>;
}

export default App;
