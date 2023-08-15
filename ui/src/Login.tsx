import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Login = () => {
  const [urlSearchParams] = useSearchParams();
  const authToken = urlSearchParams.get("AUTHSERVICE_JWT");

  useEffect(() => {
    const login = async () =>
      await axios.post("http://localhost:5000/login", { authToken });

    if (authToken) login();
  }, [authToken]);

  return <h1>Logging in...</h1>;
};

export default Login;
