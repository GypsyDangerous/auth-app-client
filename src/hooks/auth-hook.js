import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';


let logoutTimer;

const daysToMilli = days => days * 86400000

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [expiryDate, setExpireDate] = useState()
    const [userId, setUserId] = useState(false);

    const login = useCallback((uid, token, Expiry) => {
        setToken(token);
        setUserId(uid);
        const ExpiryDate = Expiry || new Date(new Date().getTime() + daysToMilli(1))
        setExpireDate(ExpiryDate)
        localStorage.setItem(
            process.env.REACT_APP_AUTH_TOKEN,
            JSON.stringify({
                userId: uid,
                token: token,
                ExpiryDate: ExpiryDate.toISOString()
            }
            )
        )
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN)
        setToken(null);
        setExpireDate(null)
        setUserId(null);
    }, []);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN))
        if (userData && userData.token && new Date(userData.ExpiryDate) > new Date()) {
            login(userData.userId, userData.token, new Date(userData.ExpiryDate))
        } else {
            logout()
        }
    }, [login])

    useEffect(() => {
        if (token && expiryDate) {
            logoutTimer = setTimeout(logout, expiryDate.getTime() - new Date().getTime())
        } else {
            clearTimeout(logoutTimer)
        }
    }, [token, logout, expiryDate])

    return {token, login, logout, userId}
}