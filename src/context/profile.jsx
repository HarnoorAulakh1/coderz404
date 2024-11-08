import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext({
  user: {
    _id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    status: ""
  },
  dispatch: () => {},
});

export default function Profile({ children }) {
  const [user, dispatch] = useState({
    _id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    status: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch(`/api/user/checklogin`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      dispatch(await data.json());
    };
    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
