import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithRedirect(auth, provider);

function App() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />

                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default App;
