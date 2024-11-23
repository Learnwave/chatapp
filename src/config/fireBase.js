
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore,setDoc ,doc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAHDv9RU3AfwL0Z7hrYG2u6A31EF0TVF78",
  authDomain: "chatapp-gs-498cb.firebaseapp.com",
  projectId: "chatapp-gs-498cb",
  storageBucket: "chatapp-gs-498cb.firebasestorage.app",
  messagingSenderId: "755604962035",
  appId: "1:755604962035:web:b282a39a2aaf2601af9586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app) ;

const db = getFirestore(app);

const signUp = async (userName,email,password) => {
            try {
             const res = await createUserWithEmailAndPassword(auth,email,password);
             const user = res.user;
             
             await setDoc(doc(db,"users",user.uid),{
                id : user.uid,
                userName: userName.toLowerCase(),
                email,
                name:"",
                avatar:"",
                bio:"hey ,there im using chat app",
                lastSeen : Date.now()
             })
             await setDoc(doc(db,"chats",user.uid),{
                chatData:[]
             })
             
            } catch (error) {
                console.log(error);
                toast.error(error.code.split("/")[1].split('-').join(" "));
            }
}

const login = async (email,password)=> {
            try {
                await signInWithEmailAndPassword(auth,email,password);
                toast.success("login successful")
            } catch (error) {
                console.error(error);
                toast.error(error.code.split("/")[1].split('-').join(" "));
            }
}

const logout = async () => {
  try {
    await signOut(auth)
    toast.success("logout successful")
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split('-').join(" "));
  }
}


export {signUp,login,logout,auth,db};