import {history} from '../history';
import {HIDELOADING, SHOWLOADING} from "../actions/action-types";

const auth = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: SHOWLOADING
    });

    if (username === "israj" && password === "12345678") {
      dispatch({
        type: HIDELOADING
      });

      localStorage.setItem('current-token', "12345678");

      localStorage.setItem('current-username', username);

      history.push('/admin');
    } else {
      dispatch({
        type: HIDELOADING
      });

      alert("Username or password is wrong")
    }
  }
};

const logout = () => {
  return (dispatch) => {
    dispatch({
      type: SHOWLOADING
    });

    dispatch({
      type: HIDELOADING
    });

    localStorage.setItem('current-token', "");

    localStorage.setItem('current-username', "");

    history.push("/login");
  }
};

export {auth, logout}
