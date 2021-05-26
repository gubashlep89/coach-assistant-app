import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Error from '../error';

class ErrorBoundry extends Component {

	state = {
		error: false
	}

	componentDidCatch() {
		this.setState({error: true});
	}

    render() {
		if (this.state.error) {
			return <Error/>
		}

		return this.props.children;
    }
}

ErrorBoundry.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundry;