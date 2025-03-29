"use client";
import Link from "next/link";
import React, { useState, useCallback, useMemo } from "react";
import * as Styled from "./styled";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import MenuItemContent from "./MenuItemContent";

// 폴더 구조 타입 정의
export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);

  // 메뉴 데이터 메모이제이션
  const menuItems: MenuItem[] = useMemo(
    () => [
      {
        id: "home",
        label: "홈",
        icon: <AiOutlineHome size={24} />,
        path: "/",
      },
      {
        id: "papers",
        label: "프롬프트 목록",
        icon: <AiOutlineFileText size={24} />,
        path: "/papers",
        children: [
          {
            id: "papers-ai",
            label: "AI 관련",
            icon: <AiOutlineFileText size={20} />,
            path: "/papers/ai",
          },
          {
            id: "papers-web",
            label: "웹 개발",
            icon: <AiOutlineFileText size={20} />,
            path: "/papers/web",
          },
        ],
      },
      {
        id: "users",
        label: "유저",
        icon: <AiOutlineUser size={24} />,
        path: "/users",
      },
    ],
    []
  );

  // 토글 함수 메모이제이션
  const toggleFolder = useCallback((folderId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    setExpandedFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId]
    );
  }, []);

  // 메뉴 토글 버튼 핸들러
  const toggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  // 메뉴 아이템 공통 컨텐츠 컴포넌트

  // 메뉴 아이템 렌더링 함수
  const renderMenuItem = useCallback(
    (item: MenuItem, depth = 0) => {
      const isExpanded = expandedFolders.includes(item.id);
      const hasChildren = Boolean(item.children && item.children.length > 0);

      return (
        <div key={item.id}>
          <Styled.MenuItem $depth={depth}>
            {item.path ? (
              <Link href={item.path}>
                <MenuItemContent
                  item={item}
                  collapsed={collapsed}
                  isExpanded={isExpanded}
                  hasChildren={hasChildren}
                  onClickToggleFolder={toggleFolder}
                />
              </Link>
            ) : (
              <div onClick={() => toggleFolder(item.id)}>
                <MenuItemContent
                  item={item}
                  collapsed={collapsed}
                  isExpanded={isExpanded}
                  hasChildren={hasChildren}
                  onClickToggleFolder={toggleFolder}
                />
              </div>
            )}
          </Styled.MenuItem>

          {hasChildren && isExpanded && !collapsed && (
            <Styled.SubMenu>
              {item.children!.map((child) => renderMenuItem(child, depth + 1))}
            </Styled.SubMenu>
          )}
        </div>
      );
    },
    [expandedFolders, collapsed, toggleFolder]
  );

  return (
    <Styled.NavContainer $collapsed={collapsed}>
      <Styled.ToggleButton onClick={toggleCollapse}>
        <AiOutlineMenu size={20} />
      </Styled.ToggleButton>

      <Styled.MenuContainer>
        {menuItems.map((item) => renderMenuItem(item))}
      </Styled.MenuContainer>
    </Styled.NavContainer>
  );
};

export default Navbar;
