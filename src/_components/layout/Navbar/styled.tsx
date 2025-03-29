import styled, { css } from "styled-components";

// 테마 변수 정의
const theme = {
  bg: "rgba(25, 28, 36, 0.85)",
  textPrimary: "rgba(255, 255, 255, 0.85)",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  accent: "#4dabf7",
  hover: "rgba(255, 255, 255, 0.1)",
  submenuBg: "rgba(0, 0, 0, 0.1)",
  shadowColor: "rgba(0, 0, 0, 0.2)",
  buttonBg: "rgba(255, 255, 255, 0.1)",
  buttonHover: "rgba(255, 255, 255, 0.2)",
  transition: "0.3s ease",
};

// 공통 트랜지션 스타일
const transition = css`
  transition: all ${theme.transition};
`;

interface NavContainerProps {
  $collapsed: boolean;
}

interface MenuItemProps {
  $depth: number;
}

export const NavContainer = styled.nav<NavContainerProps>`
  height: 100vh;
  width: ${(props) => (props.$collapsed ? "70px" : "250px")};
  background: ${theme.bg};
  backdrop-filter: blur(10px);
  box-shadow: 2px 0 15px ${theme.shadowColor};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  overflow-x: hidden;
  ${transition}
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${theme.buttonBg};
  border: none;
  cursor: pointer;
  color: ${theme.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.buttonHover};
    transform: scale(1.05);
  }
`;

export const MenuContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 5px;
`;

export const MenuItem = styled.div<MenuItemProps>`
  padding: ${(props) => `8px 15px 8px ${15 + props.$depth * 15}px`};
  margin: 2px 0;
  border-radius: 6px;
  white-space: nowrap;
  ${transition}

  &:hover {
    background: ${theme.hover};
  }

  a {
    text-decoration: none;
    color: ${theme.textPrimary};
    display: block;
    width: 100%;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.textPrimary};
  font-weight: 500;
  text-shadow: 0 1px 2px ${theme.shadowColor};

  .icon {
    min-width: 24px;
    display: flex;
    align-items: center;
    color: ${theme.textPrimary};
    filter: drop-shadow(0 1px 2px ${theme.shadowColor});
    ${transition}
  }

  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.3px;
    ${transition}
  }

  .toggle-icon {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: ${theme.textSecondary};
    ${transition}
  }

  &:hover {
    color: ${theme.accent};

    .icon,
    .toggle-icon {
      color: ${theme.accent};
    }
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  margin-bottom: 5px;
  background: ${theme.submenuBg};
  border-radius: 4px;
  overflow: hidden;
  ${transition}
`;
