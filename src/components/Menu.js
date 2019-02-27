import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
      const { icons, displayPage } = this.props;
    return (
      <div>
        {/* Menu Icons */}
        {icons.map(icon => (
          <MenuItem
            key={icon.id}
            src={icon.src}
            alt={icon.alt}
            showPage={displayPage}
          />
        ))}
      </div>
    );
  }
}

export default Menu;
