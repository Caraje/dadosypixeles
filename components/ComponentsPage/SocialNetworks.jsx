import Link from "next/link";
import React from "react";
import { listSocialNetwork } from "../../utils/SocialNetworksList";

const SocialNetworks = () => {
  return (
    <>
      <div className="home__page__highlight__content">
        <h3 className="home__page__highlight__content__title ">Síguenos:</h3>
        <div className="home__page__highlight__content__void"></div>
      </div>
      <div className="home__page__highlight__social">
        {listSocialNetwork.map((net) => (
          <Link key={net.name} href={net.url} passHref>
            <a target="_blank">{net.icon}</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialNetworks;
