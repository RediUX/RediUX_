import React, { useEffect, useState } from "react";
import { fetchLogout } from "../../api/entities/user";

const Header = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setLogged(true);
    }
  }, []);

  const logout = () => {
    fetchLogout();
    setLogged(false);
  };

  return (
    <header className="bg-gray text-white h-28 flex justify-center items-center">
      <div className="flex justify-between items-center w-11/12">
        <img src="/svg/logo.svg" alt="RediUX Logo" />
        {logged && (
          <button
            onClick={logout}
            className="border-2 border-status-red text-status-red px-6 py-2 rounded-md hover:opacity-50"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
