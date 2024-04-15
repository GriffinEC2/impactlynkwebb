import { createContext } from "react";

const UserContext = createContext({
    LoginInfo: {
        userUid: "",
        userEmail: "",
        userPassword: "",
        userUsername: "",
        userSchoolOrganization: "",
        userPhoneNumber: "",
        userGrade: "",
        userOrganizer_or_volunteer: null
    },
    setLoginInfo: () => {}
});

export default UserContext;
