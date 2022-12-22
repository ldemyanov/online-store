import React from 'react';
import './footer.scss';
import githubUserSvg from '../../static/github-user.svg';
import rsLogoSvg from '../../static/rs-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <a className="footer__link" href="https://rs.school/js/">
          <img className="footer__link-img" src={rsLogoSvg} alt="" />
        </a>
        <a className="footer__link" href="https://github.com/ldemyanov/">
          <img className="github-octopus" src={githubUserSvg} alt="" />
          <span className="footer__link-text">Leonid Demyanov</span>
        </a>
        <a className="footer__link" href="https://github.com/DeevDevs/">
          <img className="github-octopus" src={githubUserSvg} alt="" />
          <span className="footer__link-text">Dmitriy Vnuchkov</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
