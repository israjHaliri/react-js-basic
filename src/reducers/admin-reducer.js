import {
    ADMIN_ADD_CLEAR_DATA,
    ADMIN_ADD_NEW_DATA,
    ADMIN_CANCEL_EDIT,
    ADMIN_LIST,
    ADMIN_LIST_EDIT,
    ADMIN_NEW_VALUE
} from "../actions/action-types";

const adminReducer = (state = [], action) => {
    if(action.type === ADMIN_LIST) {
        return action.value.data.content.map(adminContentData => {
                return {
                    key: "admin-"+ adminContentData.username,
                    username: adminContentData.username,
                    fullname: adminContentData.fullname,
                    active: adminContentData.active,
                    isEdit: false
                }
            }
        );
    } else if (action.type === ADMIN_LIST_EDIT) {
        let usernameToEdit = action.value.username;
        return state.map(admin => {
            if (usernameToEdit !== admin.username)  {
                return  {
                    ...admin,
                    isEdit: false
                };
            }
            return {
                    ...admin,
                    isEdit: true
                };
            }
        );
    } else if (action.type === ADMIN_CANCEL_EDIT) {
        return state.map(admin =>
                ({
                    ...admin,
                    isEdit: false
                })
            )
    }

    return state;
};

const initialAdminData = {
    username : '',
    fullname: '',
    password: '',
    passwordConfirm: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
    isEdit: false,
};

const editAdminReducer = (state = initialAdminData, action) => {
    if(action.type === ADMIN_NEW_VALUE) {
        const { changedField, eventValue } = action.value;

        const allowedChangedList = ['fullname', 'oldPassword', 'newPassword', 'newPasswordConfirm', 'active'];

        if (allowedChangedList.includes(changedField)) {
            const editedObject = {
                ...state,
                [changedField]: eventValue
            };

            return editedObject;
        }

        return state;
    } else if (action.type === ADMIN_LIST_EDIT) {
        const admin = action.value;
        return {
            key: "admin-"+ admin.username,
            username: admin.username,
            active: admin.active,
            fullname: admin.fullname,
            newPassword: '',
            newPasswordConfirm: '',
            isEdit: true,
        }
    } else if (action.type === ADMIN_CANCEL_EDIT) {
        return initialAdminData;
    }

    return state;
};

const addAdminReducer = (state = initialAdminData, action) => {
    if (action.type === ADMIN_ADD_NEW_DATA) {
        const { changedField, eventValue } = action.value;

        const allowedChangedList = ['username', 'fullname', 'password', 'passwordConfirm'];

        if (allowedChangedList.includes(changedField)) {
            const editedObject = {
                ...state,
                [changedField]: eventValue
            };

            return editedObject;
        }

    } else if (action.type === ADMIN_ADD_CLEAR_DATA) {
        return initialAdminData;
    }

    return state;
};

export { adminReducer, editAdminReducer, addAdminReducer }