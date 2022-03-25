import React from 'react'
import styled from 'styled-components'
import { themes } from '../../../settings/themes_constants'

const sizes = {
  large: '100%',
  normal: 'max-width',
}

const Button = ({ children, size = 'normal', icon = '' }) => {
  return (
    <ButtonStyle size={size}>
      {icon}
      {children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  margin-top: 20px;
  width: ${(props) => sizes[props.size]};
  padding: 15px 20px;
  border: none;
  background-color: ${themes.colors.primary};
  color: ${themes.colors.text};
  font-size: 0.9rem;
  cursor: pointer;
`

export default Button
