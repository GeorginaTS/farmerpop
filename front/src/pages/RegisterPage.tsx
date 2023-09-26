
import { Col, Form } from "react-bootstrap";
import { Button1 } from "../components/Button1";
import { useState, FormEvent } from "react";

import style from "../App.module.css";
import styles from "../styles/pages/RegisterPage.module.css";
import { EnvelopeAtFill, GeoAltFill, PersonFill } from "react-bootstrap-icons";
import { ChangeEvent } from "react";


export const RegisterPage = () => {
  const initialState = { name: "", email: "", password: "", password2: "", location: "" };
  const [formData, setFormData] = useState({ name: "", email: "", password: "", password2: "", location: ""});
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(formData);
    setFormData(initialState);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section id='register' className={style.container}>
      <div className={style.content}>
      
      <h1>Registra't <br />
        i ofereix els teus productes als teus veïns </h1>
      <Form onSubmit={handleSubmit} className={styles.form}> 
      <Form.Group controlId="formName" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
          <PersonFill /> Nom:
        </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.name}
            name="name"
            type="text"
            placeholder="Introdueix el teu nom"
            className={styles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formLocation" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
        <GeoAltFill /> Localització:
        </Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formData.location}
            name="location"
            type="text"
            placeholder="Introdueix la teva ubicació"
            className={styles.formInput}
        />
        
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
          <EnvelopeAtFill /> Correu electrònic:
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
        <br />
        <hr />
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
        <Form.Group controlId="formBasicPassword2" className='mb-3'>
          <Form.Label as={Col}  className={styles.formLabel}>
           Repeteix la Contrasenya: 
          </Form.Label >
          <Form.Control
            onChange={handleChange}
            value={formData.password2}
            name="password2"
            type="password"
            placeholder="Introdueix la mateixa contrasenya"
            className={styles.formInput}
          />
        </Form.Group>
        <br />
        <hr />
        <Button1
          text="Registrar-se"
          type="submit"
          icon={undefined}
          className={style.btn2}
        />
      </Form>
      </div>
    </section>
  );
};
