import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { unmountComponentAtNode } from 'react-dom'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
	const { isAuthenticated, loginwithRedirect, logout, user, isLoading } =
		useAuth0()

	useEffect(() => {
		console.log(`user':${user}`)
		console.log(`isAuthenticated':${isAuthenticated}`)
		console.log(`isLoading': ${isLoading}`)
	}, [isAuthenticated])

	return (
		<UserContext.Provider value='user context'>{children}</UserContext.Provider>
	)
}
// make sure use
export const useUserContext = () => {
	return useContext(UserContext)
}
