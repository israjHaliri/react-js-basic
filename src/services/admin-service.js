import {history} from '../history';
import {GET_ADMIN, HIDELOADING, SHOWLOADING} from "../actions/action-types";

const getData = () => {
  console.log("data loaded");
  return (dispatch, getState) => {
    dispatch({
      type: SHOWLOADING
    });

    const token = localStorage.getItem('current-token');

    fetch("https://reqres.in/api/users", {
      method: 'GET',
      headers: new Headers({
        'Authorization': token
      })
    }).then(async (response) => {
      dispatch({
        type: HIDELOADING
      });

      const status = await response.status;
      if (!response.ok) {
        console.error(status);
        throw status;
      }

      let responseJson = await response.json();

      dispatch({
        type: GET_ADMIN,
        value: responseJson
      });

    }).catch(e => {
      if (e === 403) {
        history.push('/login');
      }
    });
  };
};

const postData = (data, callback) => {
  return (dispatch, getState) => {
    dispatch({
      type: SHOWLOADING
    });

    const token = localStorage.getItem('current-token');

    fetch("https://reqres.in/api/users", {
      method: 'POST',
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        "name": "morpheus",
        "job": "leader"
      })
    }).then(async response => {
      dispatch({
        type: HIDELOADING
      });

      const jsonData = await response.json();

      if (jsonData != null) {
        callback(jsonData)
        dispatch({
          type: GET_ADMIN,
          value: {
            "page": 2,
            "per_page": 3,
            "total": 12,
            "total_pages": 4,
            "data": [
              {
                "id": 4,
                "first_name": "Eve",
                "last_name": "Holt",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
              },
              {
                "id": 5,
                "first_name": "Charles",
                "last_name": "Morris",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
              },
              {
                "id": 6,
                "first_name": "Tracey",
                "last_name": "Ramos",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
              },
              {
                "id": 7,
                "first_name": "morpheus",
                "last_name": "job leader",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
              }
            ]
          }
        });
      } else {
        alert('Failed to update, make sure your data is correct');
      }

    });

  }
};

const putData = (data) => {
  return (dispatch, getState) => {
    console.log("put data", data)
  }
};

export {getData, postData, putData}
