import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.status);
  // console.log(authStatus)

  useEffect(() => {
    // true && (false !== false) false
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? (
    <h1 className="border rounded-full text-white p-4 flex items-center justify-center">
      <div className="w-5 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </h1>
  ) : (
    <>{children}</>
  );
}
