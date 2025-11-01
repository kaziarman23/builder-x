import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {
  logoutUser,
  setUser,
  toggleLoading,
} from "../redux/features/userSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("current user:", currentUser);
        dispatch(
          setUser({
            userName: currentUser.displayName,
            userEmail: currentUser.email,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(logoutUser());
        dispatch(toggleLoading(false));
      }
    });

    return () => unSubscribe();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
