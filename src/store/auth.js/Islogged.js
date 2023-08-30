const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export function isloggedin(company) {
    return {
        type: USER_LOGGED_IN,
        company,
    }
}

export function isloggedout(company) {
    return {
        type: USER_LOGGED_OUT,
        company
    }
}

const storedIsLoggedIn = localStorage.getItem('storedIsLoggedIn')

const defaultcompanystatus = [{ status: (storedIsLoggedIn ? storedIsLoggedIn : false) }]

function IsLoggedIn(state = defaultcompanystatus, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return [{ status: true }]
        case USER_LOGGED_OUT:
            return [{ status: false }];
        default:
            return state;
    }
}

export default IsLoggedIn;