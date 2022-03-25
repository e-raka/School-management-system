import React, { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../../../settings/themes_constants'
import { menus } from '../../../settings/menus_constants'
import Avatar from '../../UI/Avatar/Avatar'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { BsChevronExpand } from 'react-icons/bs'

const SideMenu = () => {
  return (
    <Container>
      <AuthMenu />

      <Menus />
    </Container>
  )
}

const AuthMenu = () => {
  return (
    <_AuthMenu>
      <Avatar
        ImageScr={
          'https://media.istockphoto.com/photos/joyful-happy-african-american-young-man-in-eyeglasses-portrait-picture-id1207856385?k=20&m=1207856385&s=612x612&w=0&h=TsFRMPUQmTrGa-GpDHTJmTWg7d_IYKt2rD4mvBQzVvE='
        }
      />
      <Bio>
        <Username>Helen Derinlacks</Username>
        <Role>Administrateur</Role>
      </Bio>
      <BsChevronExpand color={themes.colors.text_dark} />
    </_AuthMenu>
  )
}

const Menus = () => {
  const [expanded, setExpanded] = useState([])
  let _location = useLocation()
  return (
    <MenuWrapper>
      {menus.map(({ id, title, location, children }) => (
        <Fragment key={id}>
          <MenuItem location={location === _location.pathname}>
            <div>{title}</div>
            <div>
              {children.length > 0 &&
                (!expanded.includes(id) ? (
                  <AiOutlineCaretDown
                    color={themes.colors.text_dark}
                    onClick={() => setExpanded([...expanded, id])}
                  />
                ) : (
                  <AiOutlineCaretUp
                    color={themes.colors.text_dark}
                    onClick={() =>
                      setExpanded(expanded.filter((exp) => exp !== id))
                    }
                  />
                ))}
            </div>
          </MenuItem>
          {expanded.includes(id) &&
            children.map(({ id, title }) => (
              <ChildItem key={id}>{title}</ChildItem>
            ))}
        </Fragment>
      ))}
    </MenuWrapper>
  )
}

export default SideMenu

const Container = styled.div`
  width: 20%;
  height: 100vh;
  border-right: 1px solid ${themes.colors.text};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`

const _AuthMenu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  align-items: center;
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  font-size: 0.9rem;
  font-family: 'Roboto';
`

const Username = styled.div`
  font-weight: 600;
  color: ${themes.colors.primary};
`
const Role = styled.div`
  font-weight: 300;
  color: ${themes.colors.text_dark};
`

const MenuWrapper = styled.div`
  margin-top: 3rem;
  font-family: 'roboto';
`
const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.location ? themes.colors.primary : themes.colors.text_dark};
  font-weight: ${(props) => (props.location ? '600' : '400')};
  font-size: 0.9rem;
  margin: ${(props) => (!props.location ? '2rem 0' : '10px 0')};
  cursor: pointer;
  &:hover {
    color: ${themes.colors.primary};
  }
`

const ChildItem = styled.div`
  margin: 10px 0 10px 20px;
  font-size: 0.9rem;
  color: ${themes.colors.text};
  cursor: pointer;
  &:hover {
    color: ${themes.colors.text_dark};
  }
`
