import {
    ADMIN_LIST_EDIT,
    ADMIN_NEW_VALUE,
    ADMIN_CANCEL_EDIT,
    ADMIN_ADD_NEW_DATA,
    ADMIN_ADD_CLEAR_DATA,
} from "./action-types";

const editAdmin = admin => {
    return {
        type: ADMIN_LIST_EDIT,
        value: admin
    }
};

const newValueAdmin = (changedField, eventValue) => {
    return {
        type: ADMIN_NEW_VALUE,
        value: { changedField, eventValue }
    }
};

const addNewValueAdmin = (changedField, eventValue) => {
    return {
        type: ADMIN_ADD_NEW_DATA,
        value: { changedField, eventValue }
    }
};

const addAdminClearData = () => {
    return {
        type: ADMIN_ADD_CLEAR_DATA,
    }
};

const cancelEditAdmin = () => {
    return {
        type: ADMIN_CANCEL_EDIT,
    }
};

export { editAdmin, newValueAdmin, addNewValueAdmin, addAdminClearData, cancelEditAdmin }
