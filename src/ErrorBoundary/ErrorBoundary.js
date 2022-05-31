import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Our developers are working on the issue.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {/* eslint-disable-next-line react/destructuring-assignment */}
            {this.state.error && this.state.error.toString()}
            <br />
            {/* eslint-disable-next-line react/destructuring-assignment */}
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
