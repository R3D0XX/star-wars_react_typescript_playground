import React, { useContext } from "react";
import { AuthContext } from "../contexct/AuthContext";

function Userhub() {
  const { user } = useContext(AuthContext);
  return <div>Welcome {user?.userName} to your Star-Wars Universe-Hub</div>;
}

export default Userhub;
