import { Component } from "react";
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
//   used to update the error boundary’s state
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
//  lifecycle method for performing operations when our error boundaries catch an error
  componentDidCatch(error, errorInfo) {
    console.log("Logging",error,errorInfo);
  }
//    fallback UI in case of an error
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}
