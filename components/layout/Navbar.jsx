import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { sections } from "../../utils/sections";
import MenuHidden from "./MenuHidden";
import MenuSections from "./MenuSections";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleHidden = () => setIsHidden(!isHidden);

  return (
    <div className="menu">
      <Link href="/" passHref>
        <a>
          <Image
            src="/img_static/Logo.webp"
            alt="Logo de Dados y pixeles"
            width={110}
            height={40}
            objectFit="cover"
          />
        </a>
      </Link>
      {isHidden && <MenuHidden hidden={handleHidden} />}

      <nav className="hidden">
        <ul className="menu__group">
          {sections.map((sec) => (
            <MenuSections
              key={sec.url}
              url={sec.url}
              name={sec.name}
              isFooter={false}
            />
          ))}
        </ul>
      </nav>

      <button onClick={handleHidden} className="show btn">
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default Navbar;
