import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../config/firebaseConfig";

function Favorites() {
  const getFavorites = async () => {
    const querySnapshot = await getDocs(collection(db, "Favorites"));
    querySnapshot.forEach((doc) => {
      console.log("doc", doc);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  useEffect(() => {
    getFavorites();
  }),
    [];

  return;
  <div>
    <h2> Your Favorites</h2>
  </div>;
}

export default Favorites;
