import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { Button1 } from '../components/Button1'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const LoginPage = () => {
  const navigate = useNavigate()
  const initialState = { email: '', password: '' }
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted!')
    console.log(formData)

    const config = {
      url:`http://localhost:3000/auth/login/`,
      method:'POST'
    }
    const response = await axios(config)
    
    const token = response.data.payload.token
    const id = response.data.payload.id
    console.log(token)
    console.log(response.data)
    localStorage.setItem('token', token)
    localStorage.setItem('id', id)
    navigate('/home')
    setFormData(initialState)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }
    )
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name='email'
            type='email'
            placeholder='Enter your email'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name='password'
            type='password'
            placeholder='Enter your password'
            // id={styles.textField}
          />
        </Form.Group>
        <Button1 text='Log In' type='submit' icon={undefined} />
      </Form>
      <Row>Forgot password?</Row>
    </Container>
    
  )
}
