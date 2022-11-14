import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { SiSequelize } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { SiJest } from 'react-icons/si';
import { Devices } from '../../types/Devices';

export const icons = [
  { icon: FaReact, name: 'React Js' },
  { icon: SiRedux, name: 'Redux'},
  { icon: SiJest, name: 'Jest'},
  { icon: AiFillHtml5, name: 'HTML' },
  { icon: FaCss3Alt, name: 'CSS' },
  { icon: IoLogoJavascript, name: 'Javascript' },
  { icon: SiTypescript, name: 'Typescript'},
  { icon: FaJava, name: 'Java'},
  { icon: FaPython, name: 'Python'},
  { icon: IoLogoNodejs, name: 'Node Js'},
  { icon: GrMysql, name: 'MySQL'},
  { icon: SiMongodb, name: 'MongoDB'},
  { icon: SiSequelize, name: 'Sequelize'},
  { icon: FaDocker, name: 'Docker'},
  { icon: SiExpress, name: 'Express'},
  { icon: SiTailwindcss, name: 'Tailwind'},
  { icon: BiGitBranch, name: 'Git'}
];

export const Container = styled.section<{ device: Devices }>`

  & .skills-container {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(6rem, auto));
  }

  & h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.letters};
    margin-top: 4rem;
  }

  @media ${ props => props.device.tablet } {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & .skills-container {
      width: 90%;
    }
  }

  @media ${ props => props.device.laptop } {
    margin-top: 0;
    height: 100vh;

    & .skills-container {
      margin-top: 5rem;
      width: 80%;
    }
  }
`;
