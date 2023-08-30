import { combineReducers } from 'redux';
import IsLoggedIn from '../auth.js/Islogged';
const COMPANY_STATUS = 'COMPANY_STATUS'
const CHANGE_COMPANY = 'CHANGE_COMPANY'

export function companystatus(company) {
    return {
        type: COMPANY_STATUS,
        company,
    }
}

export function changecompany(company) {
    return {
        type: CHANGE_COMPANY,
        company
    }
}

const defaultcompanystatus = [{ status: true }]

function company(state = defaultcompanystatus, action) {
    switch (action.type) {
        case COMPANY_STATUS:
            return [{ status: true }]
        case CHANGE_COMPANY:
            return [
                {
                    status: false
                }
            ];
        default:
            return state;
    }
}

const CombinedReducers = combineReducers({
    company, IsLoggedIn
});

export default CombinedReducers;