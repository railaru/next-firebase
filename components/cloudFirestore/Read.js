import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";

const Read = () => {
  function readData() {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
      alert("data successfully read");
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div>
      <button onClick={readData}>Read data</button>
    </div>
  );
};

export default Read;
