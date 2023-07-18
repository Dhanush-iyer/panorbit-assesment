import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let tokens = localStorage.getItem('isUserToken');
    if (tokens)
      setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, []);

  const handleLogin = () => {
    let token = localStorage.getItem('isUserToken');
    if (token)
      setIsLoggedIn(true);
    else setIsLoggedIn(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isUserToken');
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
  
  };

  return { isLoggedIn, handleLogin , handleLogout };

};

export { useAuth };

