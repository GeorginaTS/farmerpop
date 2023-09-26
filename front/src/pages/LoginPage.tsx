import { ChangeEvent, FormEvent, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Button1 } from "../components/Button1";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "../App.module.css";
import styles from "../styles/pages/LoginPage.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(formData);

    const config = {
      url: `http://localhost:3000/auth/login/`,
      method: "POST",
    };
    const response = await axios(config);

    const token = response.data.payload.token;
    const id = response.data.payload.id;
    console.log(token);
    console.log(response.data);
    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
    navigate("/home");
    setFormData(initialState);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <section id='login' className={style.container}>
      <div className={style.content}>
      <h1>Cuidar un hort <br />és un acte revolucionari </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
          Correu electrònic:
        </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Introdueix el correu eletrònic"
            className={styles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className='mb-3'>
          <Form.Label as={Col}  className={styles.formLabel}>
            Contrasenya: 
          </Form.Label >
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Introdueix la contrasenya"
            className={styles.formInput}
          />
        </Form.Group>
        <Button1
          text="Entrar"
          type="submit"
          icon={undefined}
          className={style.btn2}
        />
      </Form>
      </div>
    </section>
  );
};
