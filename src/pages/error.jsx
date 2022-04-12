import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import error from "../images/404-error-not-found.png";

export const Error = () => {
  return (
    <div className="errorContainer">
      <Fragment >
        <img src={error} className="error" alt="error" />
        <Link to="/">
          <Button variant="primary">Back Home</Button>
        </Link>
      </Fragment>
    </div>
  );
};