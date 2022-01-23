import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <>
      <div className="primary-heading">
        <h2>{text}</h2>
      </div>
    </>
  );
}

Header.defaultProps = {
  text: 'BMI Calculator',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
