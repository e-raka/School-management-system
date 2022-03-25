import { STUDENT_PAGE } from './pages_constants'
import {
  BsFillGrid1X2Fill,
  BsFillCalendar2DateFill,
  BsFillBellFill,
  BsFillGearFill,
} from 'react-icons/bs'

export const menus = [
  {
    id: 1,
    title: 'Gestion des étudiants',
    location: STUDENT_PAGE,
    children: [
      { id: '1_1', title: 'Creer un étudiants' },
      { id: '1_2', title: "Relevé des notes d'un étudiant" },
    ],
  },
  {
    id: 2,
    title: 'Gestion des professeurs',
    children: [
      { id: '2_1', title: 'Creer un étudiants' },
      { id: '2_2', title: "Relevé des notes d'un étudiant" },
    ],
  },
  { id: 3, title: "Gestion des paies et d'écolage", children: [] },
  { id: 4, title: 'Gestion des salles de classe', children: [] },
  {
    id: 5,
    title: 'Gestion logistiques',
    children: [
      { id: '5_1', title: 'Creer un étudiants' },
      { id: '5_2', title: "Relevé des notes d'un étudiant" },
    ],
  },
  {
    id: 6,
    title: 'Gestion des examens',
    children: [
      { id: '6_1', title: 'Creer un étudiants' },
      { id: '6_2', title: "Relevé des notes d'un étudiant" },
    ],
  },
]

export const menuPrincipale = [
  {
    id: 1,
    icon: <BsFillGrid1X2Fill size="20px" />,
  },
  { id: 2, icon: <BsFillCalendar2DateFill size="20px" /> },
  { id: 3, icon: <BsFillBellFill size="20px" /> },
  { id: 4, icon: <BsFillGearFill size="20px" /> },
]
