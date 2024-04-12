const express = require("express");

const { getFirestore, collection, getDocs } = require("firebase/firestore");

const { firebaseApp } = require("./lib/firebase");

const app = express();

app.get("/", (_, res) => {
    const db = getFirestore(firebaseApp);
    const docRef = collection(db, "users");

    getDocs(docRef, "/users/1").then((data) => {
        res.json(data.docs.map((doc) => doc.data()));
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
