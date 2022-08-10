import React from "react";
import { sections } from "../../utils/sections";
import MenuSections from "./MenuSections";

const MenuHidden = ({ hidden }) => {
  return (
    <nav className="menu__hidden">
      <ul className="menu__hiden__group">
        {sections.map((sec) => (
          <MenuSections
            close={hidden}
            key={sec.url}
            url={sec.url}
            name={sec.name}
            isFooter={false}
          />
        ))}
      </ul>
      <button onClick={hidden} className="btn btn-hidden">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </nav>
  );
};

export default MenuHidden;
