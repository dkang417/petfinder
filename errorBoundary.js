// mostly code from react.js.org/docs/error-boundaries.html

import React, { Component } from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    
    static GetDerivedStateFromError() {
        return { hasError: true };
    }


    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h1>
                    there was an error with this listing.  <Link to="/">Click here</ Link>
                    to go back to the home page or wait five seconds.
                </h1>
                    
            )
        
        }
        return this.props.children
    
            }
        
}
export default ErrorBoundary;
