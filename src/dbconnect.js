import { initializeApp, cert, getApps } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { credentials } from "../credentials.js";

export function dbConnect() {
    if(!getApps().length){
        initializeApp({
            credential: cert(credentials)
        });
}

// initializeApp({
//     credential: cert(credentials)
// });

// const db = getFirestore();

return getFirestore();
}
