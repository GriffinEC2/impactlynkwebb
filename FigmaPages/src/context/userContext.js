import { createContext } from "react";

const UserContext = createContext({
    LoginInfo: {
        userUid: "",
        userEmail: "",
        userPassword: "",
        userUsername: "",
        userSchool_organization: "",
        userPhone_number: "",
        userGrade: "",
        userOrganizer_or_volunteer: null
    },
    setLoginInfo: () => {}
});

export default UserContext;
