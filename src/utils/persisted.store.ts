import { IinitialStateAuth } from "../store/slices/auth/authSlice";
import { RemoveAuthData, getAuthData,setAuthData,  } from "./session";

interface Isate{
  
    auth: IinitialStateAuth;

}
export const saveState = (state:Isate) => {
  try {
    // Parsing auth data from Redux store
    let stateFilter = state;
    setAuthData(stateFilter.auth);

  } catch (err) {
    // Ignore write error
  }
};
export const  clearAuthState =() => {
  try {
    // Parsing auth data from Redux store
   RemoveAuthData()

  } catch (err) {
    // Ignore write error
  }
};

/* Use an IIFE to export the persisted state in a variable */
export const persistedState = (() => {
  try {
    const auth = getAuthData();

    // if (Object.keys(auth).length === 0) return undefined;
    return {
      auth,
      
    };
  } catch (err) {
    return {
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
      isError: false,
      error: "",
    };
  }
})();
