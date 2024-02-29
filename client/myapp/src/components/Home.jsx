import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then((result) => {
        console.log(result);
        if (result.data !== "Success");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home Component</h1>
    </div>
  );
};
