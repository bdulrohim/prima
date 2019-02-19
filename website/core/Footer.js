/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const PropTypes = require('prop-types');
const React = require('react');

function SocialFooter(props) {
  const repoUrl = `https://github.com/${props.config.organizationName}/${
    props.config.projectName
  }`;
  return (
    <div className="footerSection">
      <h5>Social</h5>
      <div className="social">
        <a
          className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
          href={repoUrl}
          data-count-href={`${repoUrl}/stargazers`}
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star this project on GitHub">
          {props.config.projectName}
        </a>
      </div>
      {props.config.twitterUsername && (
        <div className="social">
          <a
            href={`https://twitter.com/${props.config.twitterUsername}`}
            className="twitter-follow-button">
            Follow @{props.config.twitterUsername}
          </a>
        </div>
      )}
      {props.config.facebookAppId && (
        <div className="social">
          <div
            className="fb-like"
            data-href={props.config.url}
            data-colorscheme="dark"
            data-layout="standard"
            data-share="true"
            data-width="225"
            data-show-faces="false"
          />
        </div>
      )}
    </div>
  );
}

class Footer extends React.Component {
  render() {
    const docsPart = `${
      this.props.config.docsUrl ? `${this.props.config.docsUrl}/` : ''
    }`;
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {this.props.config.footerIcon && (
            <a href={this.props.config.baseUrl} className="nav-home">
              <img
                src={`${this.props.config.baseUrl}${
                  this.props.config.footerIcon
                }`}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            </a>
          )}
          <div className="footerSection">
            <h5>Docs</h5>
            <a
              href={`
                ${this.props.config.baseUrl}${docsPart}${
                this.props.language
              }pengantar`}>
              Dokumentasi Manual
            </a>
            <a
              href={`
                ${this.props.config.baseUrl}${
                this.props.language
              }blog`}>
              Blog
            </a>
          </div>
          <div className="footerSection">
            <h5>Official Links</h5>
            <a
              href='https://rsuppersahabatan.co.id/' target='_blank'>
              Website
            </a>
            <a 
              href='http://simrspersahabatan.co.id/simrs/user/login' target='_blank'>
              Prima Simrs
            </a>
            <a 
              href='https://rsuppersahabatan.co.id/infobed' target='_blank'>
              Informasi Tempat Tidur
            </a>
            <a 
              href='http://pendaftaran.rsuppersahabatan.co.id/' target='_blank'>
              Pendaftaran Online
            </a>
          </div>

          <div className="footerSection">
            <h5>Support Links</h5>
            <a 
              href='https://www.algolia.com/' target='_blank' >
              Algolia Search
            </a>
            <a 
              href='https://docusaurus.io/' target='_blank'>
              Docusaurus
            </a>
            <a 
              href='https://github.com/' target='_blank'>
              Github
            </a>
            <a 
              href='https://opensource.facebook.com/' target='_blank'>
              Facebook Open Source (FOS)
            </a>
          </div>
          
        </section>

        <section className="copyright">
          {this.props.config.copyright && (
            <span>{this.props.config.copyright}</span>
          )}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;