import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

export type MenuProps ={
    id: string;
    top: number;
    left:number;
    right: number;
    bottom: number;
}

type GraphMenuProps = JSX.IntrinsicElements["div"] & 
    MenuProps & {
        onClick: () => void
    }
  


export function GraphMenu({
    id,
    top,
    left,
    right,
    bottom,
    ...props
  }:  GraphMenuProps){
    return (
        <div 
            style={{ top, left, right, bottom }}
            className="context-menu"
            {...props}
        >
            <Menu>
                <h3>{id}</h3>
                <MenuItem icon="new-text-box"  text="New text box" />
                <MenuItem icon="new-object" text="New object" />
                <MenuItem icon="new-link"  text="New link" />
                <MenuDivider />
                <MenuItem text="Settings..." icon="cog" intent="primary">
                    <MenuItem icon="tick" text="Save on edit" />
                    <MenuItem icon="blank" text="Compile on edit" />
                </MenuItem>
            </Menu>
        </div>
    )
}