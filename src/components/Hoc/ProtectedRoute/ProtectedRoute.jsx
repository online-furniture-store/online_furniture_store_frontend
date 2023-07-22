import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalData } from '../../../utils/localStorage';

function ProtectedRoute({ children }) {
	return getLocalData('access') ? children : <Navigate to="/" />;
}

ProtectedRoute.propTypes = {
	children: PropTypes.element,
};

export default ProtectedRoute;
