import { getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useState } from "react"



function App() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignInWithGoogle = (e) => {
        e.preventDefault();

        const provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider);
    };

    const SignIn = (e) => {
        e.preventDefault();

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage, errorCode)
            });
    }

    return (
        <div>
            <form onSubmit={SignIn}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                <br />
                <button type="submit">Login</button>
            </form>
            <button onClick={SignInWithGoogle}>Sign in with Google</button>
        </div>
    );
}

export default App;
