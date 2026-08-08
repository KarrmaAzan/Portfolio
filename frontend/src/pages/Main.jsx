import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "../components/AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  padding: 2rem;
`;

const TopLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
`;

const RightLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 3;
`;

const LeftLink = styled(NavLink)`
  color: ${(props) =>
    props.$click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 48%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 3;
`;

const BottomLink = styled(NavLink)`
  color: ${(props) => {
    if (!props.$click) return props.theme.text;
    if (props.$darkOnClick) return "#000";
    return props.theme.body;
  }};

  text-decoration: none;
  z-index: 3;
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.$click ? "85%" : "50%")};
  left: ${(props) => (props.$click ? "92%" : "50%")};
  transform: translate(-50%, -50%);

  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 1s ease;
  z-index: 4;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) =>
      props.$click ? "none" : "inline-block"};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;

  background-color: #000;

  width: ${(props) =>
    props.$click ? "50%" : "0%"};

  height: ${(props) =>
    props.$click ? "100%" : "0%"};

  z-index: 1;

  transition:
    height 0.5s ease,
    width 1s ease 0.5s;
`;

/*
  CENTER ARCHIVE IMAGE

  Current image:
  public/TSD.PNG

  You can make it smaller or bigger by changing:
  width: min(38vw, 480px);
*/
const ArchiveImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

width: min(75vw, 950px);
  height: auto;
  max-height: 78vh;

  object-fit: contain;

  opacity: ${(props) =>
    props.$click ? 1 : 0};

  transform: ${(props) =>
    props.$click
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0.9)"};

  filter:
    drop-shadow(1px 0 0 white)
    drop-shadow(-1px 0 0 white)
    drop-shadow(0 1px 0 white)
    drop-shadow(0 -1px 0 white)
    drop-shadow(1px 1px 0 white)
    drop-shadow(-1px 1px 0 white)
    drop-shadow(1px -1px 0 white)
    drop-shadow(-1px -1px 0 white);

  transition:
    opacity 1s ease 0.7s,
    transform 1.4s ease 0.7s;

  z-index: 2;
  pointer-events: none;
`;

export default function BrandLandingPage() {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      {/* Half-and-half background */}
      <DarkDiv $click={click} />

      {/* Center image on top of the split */}
      <ArchiveImage
        src="/TSD.PNG"
        alt="The Soul Dweller"
        $click={click}
      />

      <Container>
        <PowerButton />

        <LogoComponent
          theme={click ? "dark" : "light"}
        />

        <SocialIcons
          theme={click ? "dark" : "light"}
        />

        <Center
          $click={click}
          onClick={() => setClick(!click)}
        >
          <YinYang
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />

          <span>enter archive</span>
        </Center>

        <TopLink to="/overview">
          <motion.h2
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            Overview
          </motion.h2>
        </TopLink>

        <RightLink to="/brand">
          <motion.h2
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            Brand
          </motion.h2>
        </RightLink>

        <LeftLink
          to="/ips"
          $click={click}
        >
          <motion.h2
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            IP Library
          </motion.h2>
        </LeftLink>

        <BottomBar>
          <BottomLink
            to="/characters"
            $click={click}
          >
            <motion.h2
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Characters
            </motion.h2>
          </BottomLink>

          <BottomLink
            to="/lore"
            $click={click}
          >
            <motion.h2
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Lore
            </motion.h2>
          </BottomLink>

          <BottomLink
            to="/projects"
            $click={click}
            $darkOnClick
          >
            <motion.h2
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Projects
            </motion.h2>
          </BottomLink>

          <BottomLink
            to="/assets"
            $click={click}
            $darkOnClick
          >
            <motion.h2
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Assets
            </motion.h2>
          </BottomLink>
        </BottomBar>
      </Container>
    </MainContainer>
  );
}