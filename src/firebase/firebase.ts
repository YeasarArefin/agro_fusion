

// import Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD7fCvOtReJI3qu3ed9mAzMb22vX6HhDqk",
  authDomain: "esp32-dht11-data-3e83d.firebaseapp.com",
  databaseURL: "https://esp32-dht11-data-3e83d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-dht11-data-3e83d",
  storageBucket: "esp32-dht11-data-3e83d.appspot.com",
  messagingSenderId: "186167936591",
  appId: "1:186167936591:web:9abdc5b273d669aaaf4c3a"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
