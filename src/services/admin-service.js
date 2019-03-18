import {addAdminClearData} from "../actions/admin-creator";
import {history} from '../history';
import {ADMIN_CANCEL_EDIT, ADMIN_LIST, HIDELOADING, SHOWLOADING} from "../actions/action-types";
import {SAVE_SUCCESS, UPDATE_SUCCESS, DATA_EXIST} from "../constant/status-code";

const fetchAdminList = () => {
    return (dispatch, getState) => {
        dispatch({
            type: SHOWLOADING
        });

        const token = localStorage.getItem('current-token');

        fetch(process.env.REACT_APP_ENDPOINT + "/admins", {
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
                type: ADMIN_LIST,
                value: responseJson
            });

        }).catch(e => {
            if (e === 403) {
                history.push('/login');
            }
        });
    };
};

const saveAdmin = () => {
    return (dispatch, getState) => {
        dispatch({
            type: SHOWLOADING
        });

        const editedAdmin = getState().editAdminReducer;

        const token = localStorage.getItem('current-token');

        fetch(process.env.REACT_APP_ENDPOINT + '/admins', {
            method: 'PATCH',
            headers: new Headers({
                'Authorization': token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(editedAdmin)
        }).then(async response => {
            dispatch({
                type: HIDELOADING
            });

            const jsonData = await response.json();

            if (jsonData.status === UPDATE_SUCCESS) {
                dispatch(fetchAdminList());
                dispatch({type: ADMIN_CANCEL_EDIT});
            } else {
                alert('Failed to update, make sure your data is correct');
            }

        });

    }
};

const addAdmin = () => {
    return (dispatch, getState) => {
        dispatch({
            type: SHOWLOADING
        });

        const editedAdmin = getState().addAdminReducer;

        const token = localStorage.getItem('current-token');

        fetch(process.env.REACT_APP_ENDPOINT + '/admins', {
            method: 'POST',
            headers: new Headers({
                'Authorization': token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(editedAdmin)
        }).then(async response => {
            dispatch({
                type: HIDELOADING
            });
            
            const jsonData = await response.json();
            const statusCode = await response.status;

            console.log(statusCode, jsonData);

            if (jsonData.status === SAVE_SUCCESS) {
                dispatch(fetchAdminList());
                dispatch(addAdminClearData());
            }else if(jsonData.status === DATA_EXIST){
                alert("Data exist")
            } else {
                alert('Failed to save, make sure your data is correct');
            }

        });

    }
};

export {fetchAdminList, saveAdmin, addAdmin}
