import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from '../RegisterPage/RegisterPage.module.css'

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  console.log(name);
  console.log(email);
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit} className={s.form}>
      <Form.Group md="4" controlId="validationCustom01">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={name}
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={password}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        SIGN UP
      </Button>
    </Form>
  );
}
