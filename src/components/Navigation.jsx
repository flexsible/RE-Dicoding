import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="navigation">
      <div className="logo">
        Threads
      </div>
      <div className="navigation-container">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <button type="button" onClick={signOut}>Sign out</button>
        <img className="navigation-avatar" src={avatar} alt={id} title={name} />
      </div>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;