import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import {
  AiOutlineLogin,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from 'react-icons/ai'
import { themes } from '../../settings/themes_constants'

const Login = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <Container>
      <Content>
        <Title>Se connecter</Title>
        <Descript>
          Veuillez s'il vous plait vous connecter pour acceder à votre compte
        </Descript>
        <LoginForm />
      </Content>
      <SideBanner />
    </Container>
  )
}

const LoginForm = () => {
  const [type, setType] = useState('password')
  const [username, setUsername] = useState({
    value: '',
    message: '',
  })
  const [password, setPassword] = useState({
    value: '',
    message: '',
  })

  useEffect(() => {
    if (type === 'text') {
      setTimeout(() => setType('password'), 3000)
    }
  }, [type])

  const handleSignIn = (e) => {
    e.preventDefault()
    if (username.value === '') {
      setUsername({ ...username, message: 'Ce champ est obligatoire' })
      setTimeout(() => setUsername({ ...username, message: '' }), 3000)
    }
    if (password.value === '') {
      setPassword({ ...password, message: 'Ce champ est obligatoire' })
      setTimeout(() => setPassword({ ...password, message: '' }), 3000)
    }

    const credentials = { username: username.value, password: password.value }
    console.log(credentials)
  }

  return (
    <Form onSubmit={handleSignIn}>
      <Label>Username</Label>
      <Input
        hasError={username.message !== ''}
        id="email"
        type="email"
        onFocus={() => setUsername({ ...username, message: '' })}
        onChange={(e) => setUsername({ ...username, value: e.target.value })}
      />
      <Message>{username.message}</Message>
      <Label> Mot de passe</Label>
      <PasswordWrapper>
        <Icon>
          {type === 'password' ? (
            <AiOutlineEyeInvisible onClick={() => setType('text')} />
          ) : (
            <AiOutlineEye onClick={() => setType('password')} />
          )}
        </Icon>
        <Input
          hasError={password.message !== ''}
          id="pwd"
          type={type}
          onFocus={() => setPassword({ ...password, message: '' })}
          onChange={(e) => setPassword({ ...password, value: e.target.value })}
        />
        <Message>{password.message}</Message>
      </PasswordWrapper>
      <Button type="submit" size="large">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AiOutlineLogin />
          <div style={{ margin: '0 10px' }}>Se connecter</div>
        </div>
      </Button>
    </Form>
  )
}

export default Login

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${themes.colors.background};
`

const SideBanner = styled.div`
  width: 60%;
  height: 100vh;
  background-color: ${themes.colors.primary};
`
const Content = styled.div`
  width: 40%;
  height: max-height;
  margin: auto;
  padding: 0 3rem;
`
const Title = styled.h1`
  color: ${themes.colors.primary};
  font-weight: 800;
  font-size: 32px;
`
const Descript = styled.p`
  color: ${themes.colors.text_dark};
`

const Form = styled.form`
  margin-top: 3rem;
`

const Label = styled.label`
  display: block;
  color: ${themes.colors.text_dark};
  padding: 10px 0;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding: 20px;
  border: 1px solid
    ${(props) => (!props.hasError ? themes.colors.text_dark : 'red')};
  border-radius: 2px;
`
const Message = styled.span`
  color: red;
`

const PasswordWrapper = styled.div`
  position: relative;
`
const Icon = styled.i`
  position: absolute;
  top: 13px;
  right: 10px;
  cursoir: pointer;
`
