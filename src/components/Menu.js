import React, { Component } from "react";
import MenuItem from "./MenuItem";
import '../style/Menu.css';

class Menu extends Component {
  render() {
      const { icons, displayPage } = this.props;
    return (
      <nav className="nav">
        {/* Menu Icons */}
        {icons.map(icon => (
          <MenuItem
            key={icon.id}
            src={icon.src}
            alt={icon.alt}
            showPage={displayPage}
            animation={icon.animation}
          />
        ))}
      </nav>
    );
  }
}

export default Menu;
