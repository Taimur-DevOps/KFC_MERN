import { Component } from "react";
import "./ErrorBoundry.css";
import error from "../assets/error.webp";

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
    console.log("Logging", error, errorInfo);
  }
  //    fallback UI in case of an error
  render() {
    if (this.state.hasError) {
      return (
        <div className="errorUi">
     
            <img src={error} alt="Something Wrong" />
            <h1>Something Went Wrong</h1>
         
        </div>
      );
    }
    return this.props.children;
  }
}
