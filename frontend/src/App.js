import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

import { auth } from "./lib/firebase";

function App() {
    const sign_in = (e) => {
        e.preventDefault();

        const provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider);
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />

                <br />
                <button type="submit">Login</button>

                <button onClick={sign_in}>Sign in with Google</button>
            </form>
        </div>
    );
}

export default App;
