import styles from "@/components/srcl/srcl-buttongroup.module.scss";
import * as React from "react";
import * as Utilities from "@/lib/srcl-utilities";

import ActionButton from "@/components/srcl/srcl-actionbutton";
import DropdownMenuTrigger from "@/components/srcl/srcl-dropdownmenutrigger";

// Define the type for an individual item in the "items" array
export interface ButtonGroupItem {
  body: React.ReactNode; // Can accept any valid React content
  hotkey?: string;
  selected?: boolean;
  onClick?: () => void;
  items?: ButtonGroupItem[];
}

// Define the type for props
interface ButtonGroupProps {
  items: ButtonGroupItem[];
  isFull?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  if (!props.items) {
    return null;
  }

  return (
    <div
      className={Utilities.classNames(
        styles.root,
        props.isFull ? styles.full : null,
      )}
    >
      {props.items.map((each, index) => {
        const key = each.body ? `${each.body}-${index}` : index.toString();

        if (each.items) {
          return (
            <DropdownMenuTrigger
              key={key}
              items={each.items}
              hotkey={each.hotkey}
            >
              <ActionButton hotkey={each.hotkey} isSelected={each.selected}>
                {each.body}
              </ActionButton>
            </DropdownMenuTrigger>
          );
        }

        return (
          <ActionButton
            key={key}
            onClick={each.onClick}
            hotkey={each.hotkey}
            isSelected={each.selected}
          >
            {each.body}
          </ActionButton>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
