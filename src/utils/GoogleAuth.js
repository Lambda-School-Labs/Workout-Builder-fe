import { useEffect } from "react";

const GoogleAuth = props => {
  useEffect(() => {
    const urlParams = new URLSearchParams(props.location.search);

    if (urlParams) {
      localStorage.setItem("token", urlParams.get("token"));
      localStorage.setItem("first_name", urlParams.get("first_name"));
      localStorage.setItem("last_name", urlParams.get("last_name"));
    }

    props.navigate("/dashboard");
  }, [props]);

  return null;
};

export default GoogleAuth;
