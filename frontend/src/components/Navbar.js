import React from 'react';
import PropTypes from 'prop-types';
import ColorPalet from './ColorPalet';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ position: 'sticky !important' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>

          <div id="navColorPaletsHolder" style={{ opacity: props.colorPaletOpacity, transition: 'opacity 0.1s ease-in' }}>
            <ColorPalet mode={props.mode} setTheme={props.setTheme} theme={props.themes.darkSkyBlue} />
            <ColorPalet mode={props.mode} setTheme={props.setTheme} theme={props.themes.darkBlue} />
            <ColorPalet mode={props.mode} setTheme={props.setTheme} theme={props.themes.darkRed} />
          </div>

          <div className="form-check form-switch mx-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDarkMode} />
            <label className="form-check-label" id="darkModeToggler" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Title',
  about: 'About'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
