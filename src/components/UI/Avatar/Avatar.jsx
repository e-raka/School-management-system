import React from 'react'
import styled from 'styled-components'

const Avatar = ({ ImageScr }) => {
  return <Image src={ImageScr} alt="avatar" />
}

export default Avatar

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`
