import React from "react";

import FirebaseAuth from "../components/auth/FirebaseAuth";

const Auth = () => {
  return (
    <div>
      <FirebaseAuth />
      <p>
        <a href="/">Go home</a>
      </p>
    </div>
  );
};

export default Auth;
