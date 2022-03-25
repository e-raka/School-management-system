import React from 'react'
import styled from 'styled-components'
import { themes } from '../../../settings/themes_constants'
import { menuPrincipale } from '../../../settings/menus_constants'

const SidePrincipalMenu = () => {
  return (
    <Wrapper>
      {menuPrincipale.map((menu) => (
        <Icon key={menu.id}>{menu.icon}</Icon>
      ))}
    </Wrapper>
  )
}

export default SidePrincipalMenu

const Wrapper = styled.div`
  background-color: ${themes.colors.background};
  width: max-content;
  height: 100vh;
  padding: 5rem 1rem;
  position: fixed;
`
const Icon = styled.div`
  cursor: pointer;
  color: ${themes.colors.primary};
  margin: 2rem 0;
`
