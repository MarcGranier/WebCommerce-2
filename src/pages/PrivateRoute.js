import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0()
	// const { isAuthenticated, user } = useAuth0()
	// const isUser = isAuthenticated && user
	return (
		<Route
			{...rest}
			render={() => {
				return user ? children : <Redirect to='/'></Redirect>
			}}
		></Route>
	)
}
export default PrivateRoute
