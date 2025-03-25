import styles from "@/components/srcl/srcl-actionbar.module.scss";
import * as React from "react";
import ButtonGroup, {
  ButtonGroupItem,
} from "@/components/srcl/srcl-buttongroup"; // Import ButtonGroupItem type

// Define the ActionBarItem type
interface ActionBarItem {
  hotkey?: string;
  onClick?: () => void;
  openHotkey?: string;
  selected?: boolean;
  body: React.ReactNode; // Allow React elements, strings, or fragments
  items?: any;
}

// Define the ActionBarProps interface
interface ActionBarProps {
  items: ActionBarItem[];
}

const ActionBar: React.FC<ActionBarProps> = ({ items }) => {
  // Map ActionBarItems to ButtonGroupItems
  const buttonGroupItems: ButtonGroupItem[] = items.map((item) => ({
    body: item.body,
    hotkey: item.hotkey,
    selected: item.selected,
    onClick: item.onClick,
    items: item.items,
  }));

  return (
    <div className={styles.root}>
      <ButtonGroup items={buttonGroupItems} />
    </div>
  );
};

export default ActionBar;
