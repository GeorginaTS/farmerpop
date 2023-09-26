
import { Col, Form } from "react-bootstrap";
import style from "../App.module.css";
import styles from '../styles/pages/AddProductPage.module.css'

import { useState, FormEvent, ChangeEvent } from 'react';
import { Button1 } from "../components/Button1";

export const AddProductPage = () => {
  const initialState = { title: "", description: "", price: "", user_id: "" };
  const [formData, setFormData] = useState({ title: "", description: "", price: "", user_id: ""});
  
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
    <section id='addProduct' className={style.container}>
      <div className={style.content}>
    <h1>Alimenta el teu veïnat</h1>
    <Form onSubmit={handleSubmit} className={styles.form}> 
      <Form.Group controlId="formTitle" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
          Titol:
        </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.title}
            name="title"
            type="text"
            placeholder="Introdueix el titol del producte"
            className={styles.formInput}
          />
        </Form.Group>
        <Form.Group controlId="formDescription" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
       Descripció:
        </Form.Label>
        <Form.Control
            onChange={handleChange}
            value={formData.description}
            name="description"
            type="text"
            placeholder="Introdueix la descripció."
            className={styles.formInput}
        />
        
        </Form.Group>
        <Form.Group controlId="formPrice" className='mb-3'>
        <Form.Label as={Col}  className={styles.formLabel}>
           Preu:
        </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.price}
            name="email"
            type="email"
            placeholder="Introdueix el preu"
            className={styles.formInput}
          />
        </Form.Group>
        <br />
        <Button1
          text="Publicar"
          type="submit"
          icon={undefined}
          className={style.btn2}
        />
        </Form>
      </div>
    </section>
  )
}
