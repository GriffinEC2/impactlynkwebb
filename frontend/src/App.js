import {
    signInWithPopup,
    getAuth,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";

import app from "./lib/firebase";

function App() {
    const signInWithGoogle = (e) => {
        e.preventDefault();

        const provider = new GoogleAuthProvider();

        signInWithPopup(getAuth(app), provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...

                console.log(user, token, credential);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);

                console.log(errorMessage, errorCode, email, credential);
            });
    };

    const signOutHandler = () => {
        signOut(getAuth(app)).then(() => {
            console.log("sign out");
        });
    };

    const SignIn = (e) => {
        e.preventDefault();

        // const auth = getAuth();

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed up
        //         const user = userCredential.user;
        //         console.log(user);
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;

        //         console.log(errorMessage, errorCode);
        //     });
    };

    return (
        <div>
            <form onSubmit={SignIn}>
                <input
                    type="text"
                    placeholder="Email"
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    // onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <button type="submit">Login</button>
            </form>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    );
}

export default App;
