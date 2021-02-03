import React, { useContext } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Login";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { AccountContext } from "./accountContext";
import Login from "./Login";


const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  // const { switchToLogin } = useContext(AccountContext);
  const { switchToLogin } = () =>{
    <Login />
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Container>
            <Form className="form" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="form-label">Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      className="form-input"
                      placeholder="Enter your username"
                      value={values.username}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  {errors.username && (
                    <Alert variant="danger">{errors.username}</Alert>
                  )}
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="form-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  {errors.email && (
                    <Alert variant="danger">{errors.email}</Alert>
                  )}
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="form-label">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      className="form-input"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  {errors.password && (
                    <Alert variant="danger">{errors.password}</Alert>
                  )}
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="form-label">
                      Confirm your password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password2"
                      className="form-input"
                      placeholder="Confirm your password"
                      value={values.password2}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  {errors.password2 && (
                    <Alert variant="danger">{errors.password2}</Alert>
                  )}
                </Col>
              </Row>

              <Button
                variant="primary"
                className="form-input-btn"
                type="submit"
              >
                Sign up
              </Button>
              <Row>
                <span href="#">
                  Already have an account? Log in{" "}
                  <a href="#" onClick={switchToLogin}>
                    Here
                  </a>
                </span>
              </Row>
            </Form>
          </Container>
        </header>
      </div>
    </>
  );
};

export default FormSignup;
