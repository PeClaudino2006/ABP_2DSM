import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, MapPin, Table, TrendingUp } from "lucide-react";
import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.inverse};
  background: linear-gradient(180deg, rgba(30, 64, 175, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%);
  backdrop-filter: saturate(1.1) blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(4)};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoText = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  margin: 0;
  font-weight: 300;
`;

const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

const StyledLink = styled(Link)<{ active?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(3)}`};
  border-radius: 999px;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.28)" : "rgba(255,255,255,0.12)")};
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: ${({ theme }) => theme.colors.text.inverse};
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: currentColor;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.36);
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.8);
    outline-offset: 2px;
  }
`;

const MobileButton = styled.button`
  display: block;
  padding: ${({ theme }) => theme.spacing(2)};
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  background: linear-gradient(180deg, rgba(8, 78, 172, 1) 0%, rgba(11, 110, 246, 1) 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileLink = styled(Link)<{ active?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  transition: background 0.2s;
  background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.25)" : "transparent")};
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.inverse};
  text-decoration: none;
  font-weight: 600;

  &:visited {
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.32);
  }
`;

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Nav>
      <Container>
        <Logo>
          <div>
            <LogoText>SIMA</LogoText>
            <Subtitle>Sistema Integrado de Monitoramento Ambiental</Subtitle>
          </div>
        </Logo>

        {/* Menu desktop */}
        <DesktopMenu>
          <StyledLink to="/" active={location.pathname === "/"}>
            <Home size={16} />
            Home
          </StyledLink>
          <StyledLink to="/mapa" active={location.pathname === "/mapa"}>
            <MapPin size={16} />
            Mapa Interativo
          </StyledLink>
          <StyledLink to="/sima" active={location.pathname === "/sima"}>
            <Table size={16} />
            Tabela
          </StyledLink>
          <StyledLink to="/grafico" active={location.pathname === "/grafico"}>
            <TrendingUp size={16} />
            Gráfico
          </StyledLink>
        </DesktopMenu>

        {/* Botão hambúrguer */}
        <MobileButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileButton>
      </Container>

      {/* Menu mobile */}
      {isOpen && (
        <MobileMenu>
          <MobileLink to="/" active={location.pathname === "/"} onClick={() => setIsOpen(false)}>
            <Home size={16} />
            Home
          </MobileLink>
          <MobileLink
            to="/mapa"
            active={location.pathname === "/mapa"}
            onClick={() => setIsOpen(false)}
          >
            <MapPin size={16} />
            Mapa Interativo
          </MobileLink>
          <MobileLink
            to="/sima"
            active={location.pathname === "/sima"}
            onClick={() => setIsOpen(false)}
          >
            <Table size={16} />
            Tabela
          </MobileLink>
          <MobileLink
            to="/grafico"
            active={location.pathname === "/grafico"}
            onClick={() => setIsOpen(false)}
          >
            <TrendingUp size={16} />
            Gráfico
          </MobileLink>
        </MobileMenu>
      )}
    </Nav>
  );
}

export default MenuBar;
