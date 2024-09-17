import { initializeApp } from "firebase/app"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

initializeApp(firebaseConfig)

const db = getFirestore()

export const getProductos = async (categoria) => {
    try {
        let productosCollection = collection(db, "Productos")
        let productosQuery = query(productosCollection, where("categoria", "==", categoria))
        const snapshot = await getDocs(productosQuery)
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
        console.log("Error al obtener los productos", error)
    }
}