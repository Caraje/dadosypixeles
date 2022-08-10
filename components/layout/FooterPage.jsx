import Link from "next/link";
import React from "react";
import { sections } from "../../utils/sections";
import { listSocialNetwork } from "../../utils/SocialNetworksList";
import MenuSections from "./MenuSections";
import MenuSocialNetwork from "./MenuSocialNetwork";

const FooterPage = () => {
  return (
    <div className="container footerpage">
      <div className="footer__text">
        <h3 className="footer__text__title">
          Web creada por{" "}
          <Link href={"https://www.carlosajenjo.es/"} passHref>
            <a className="footer__text__link" target="blank_">
              Carlos Ajenjo
            </a>
          </Link>
        </h3>
      </div>

      <div className="home__page__highlight__social">
        {listSocialNetwork.map((net, id) => (
          <MenuSocialNetwork
            key={id}
            name={net.name}
            url={net.url}
            icon={net.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterPage;
