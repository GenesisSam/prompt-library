import React, { useMemo } from "react";
import * as Styled from "./styled";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { MenuItem } from ".";

// 인라인 스타일 객체 분리
const getStyles = (collapsed: boolean) => ({
  icon: {
    marginRight: collapsed ? 0 : "12px",
  },
  label: {
    opacity: collapsed ? 0 : 1,
    transform: collapsed ? "translateX(10px)" : "translateX(0)",
    width: collapsed ? 0 : "auto",
    visibility: collapsed ? "hidden" : ("visible" as "hidden" | "visible"),
  },
  toggleIcon: {
    opacity: collapsed ? 0 : 1,
    visibility: collapsed ? "hidden" : ("visible" as "hidden" | "visible"),
  },
});

const MenuItemContent = ({
  item,
  collapsed,
  isExpanded,
  hasChildren,
  onClickToggleFolder,
}: {
  item: MenuItem;
  collapsed: boolean;
  isExpanded: boolean;
  hasChildren: boolean;
  onClickToggleFolder: (id: string, e: React.MouseEvent) => void;
}) => {
  // 스타일 객체 메모이제이션
  const styles = useMemo(() => getStyles(collapsed), [collapsed]);

  return (
    <Styled.MenuContent>
      <span className="icon" style={styles.icon}>
        {item.icon}
      </span>
      <span className="label" style={styles.label}>
        {item.label}
      </span>
      {hasChildren && (
        <span
          className="toggle-icon"
          onClick={(e) => onClickToggleFolder(item.id, e)}
          style={styles.toggleIcon}
        >
          {isExpanded ? <AiOutlineDown /> : <AiOutlineRight />}
        </span>
      )}
    </Styled.MenuContent>
  );
};

export default React.memo(MenuItemContent);
