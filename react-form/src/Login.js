import React, { useContext } from "react";
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
import { AccountContext } from "./accountContext";

const Login = () => {
  const { switchToSignin } = useContext(AccountContext);
  return (
    <div>
      <header className="App-header">
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                className="form-input"
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                className="form-input"
              ></Form.Control>
            </Form.Group>

            <Button variant="primary" className="form-input-btn" type="submit">
              Sign up
            </Button>
            <Row>
              <span href="#">
                Don't have an accoun? Sign up{" "}
                <a href="#" onClick={switchToSignin}>
                  Here
                </a>
              </span>
            </Row>
          </Form>
        </Container>
      </header>
    </div>
  );
};

export default Login;
