import { createContext } from "react";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");

const UserContext = createContext({
    LoginInfo: {
        email: "",
        password: "",
        username: "", 
        school_organization: "", 
        phone_number: "", 
        grade: "", 
        organizer_or_volunteer: null,
    },
    setLoginInfo: () => {},
});

export default UserContext;