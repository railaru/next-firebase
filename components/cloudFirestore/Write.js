import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";

const Write = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .set({
          string_data: "Rutenis Raila",
          number_data: 2,
          boolean_data: true,
          map_data: { stringInMap: "Hi", numberInMap: 7 },
          array_data: ["text", 4],
          null_data: null,
          time_stamp: firebase.firestore.Timestamp.fromDate(new Date()),
          get_point: new firebase.firestore.GeoPoint(34, 7, -131),
        })
        .then(alert("Data successfully sent"));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <button onClick={() => sendData()}>Send data to firestore</button>
    </div>
  );
};

export default Write;
