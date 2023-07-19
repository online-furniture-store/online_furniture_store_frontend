import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
	const { isAuth } = useSelector((state) => state.auth);
	if (!isAuth) {
		return <Navigate to="/" replace />;
	}
	return children;
}

ProtectedRoute.propTypes = {
	children: PropTypes.element,
};

export default ProtectedRoute;
