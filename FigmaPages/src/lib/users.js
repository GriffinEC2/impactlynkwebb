import {
    addDoc,
    collection,
    doc,
    getDoc,
    getFirestore,
    updateDoc,
    getDocs,
    setDoc,
    query,
    where
  } from "firebase/firestore"; 
  
  export const addUserDetails = async (
    userID,
    username,
    school_organization,
    phone_number,
    grade,
    organizer_or_volunteer,
  ) => {
    const db = getFirestore(app);
    const usersRef = doc(db, "users", userID.toString());
  
    addDoc(collection(db, "users"), {
      username: username,
      school_organization: school_organization,
      phone_number: phone_number,
      grade: grade,
      organizer_or_volunteer: organizer_or_volunteer,
    });
  };
  