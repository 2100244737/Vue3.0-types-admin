import Cookies from 'js-cookie'

const TokenKey = glob.projectNameKey + '_'

export function getToken(val:any) {
    const name = TokenKey + val
    return Cookies.get(name)
}

export function setToken(val:any, token:any) {
    const name = TokenKey + val
    return Cookies.set(name, token)
}

export function removeToken(val:any) {
    const name = TokenKey + val
    return Cookies.remove(name)
}
