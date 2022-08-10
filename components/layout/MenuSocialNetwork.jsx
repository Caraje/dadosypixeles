import Link from "next/link";
import React from "react";

const MenuSocialNetwork = ({ name, url, icon }) => {
  return (
    <Link key={name} href={url} passHref>
      <a target="_blank">{icon}</a>
    </Link>
  );
};

export default MenuSocialNetwork;
