import React from "react";
//import 'styles';

import logoAcessaBr from '../../images/AcessaBR.png';
import logoEbac from '../../images/logo-ebac.png';

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo--state">
        <img src={logoAcessaBr} alt="Logo Acesso"/>
        <span className="header__city">
          / Manaus - AM
        </span>
      </div>
      <div className="header__logo--ebac">
        <span>
          Apoio:
        </span>
        <img src={logoEbac} alt="Logo Ebac"/>
      </div>
    </header>
  );
}

export default Header;