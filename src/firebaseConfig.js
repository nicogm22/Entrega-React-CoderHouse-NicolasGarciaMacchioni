import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGljzt20QcwweQqoV-pErP2MSeCntUcAk",
  authDomain: "nicolasmacchioni-comision54030.firebaseapp.com",
  projectId: "nicolasmacchioni-comision54030",
  storageBucket: "nicolasmacchioni-comision54030.appspot.com",
  messagingSenderId: "289415919783",
  appId: "1:289415919783:web:1ca07602d5bc2d3d410382",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
