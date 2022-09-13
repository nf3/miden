/** ----  Vault Vision added code file ---- */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignOutButton from '../../components/AuthButton/signout';
import { PreTag } from '../../components/PreTag';
import HeaderLink from '../../components/Header/HeaderLink';
import messages from '../../components/Header/messages';
import { FormattedMessage } from 'react-intl';

export function Profile({ user }) {
  /**
   * Show a profile, pull user context from the global state
   */
  return (
    <div>
      <h1> Profile</h1>
      <a href="https://midenexchange.vvkey.io/settings" class="profilelink">
        User Settings
      </a>      
      <PreTag>
        <code>{JSON.stringify(user, null, 2)}</code>
      </PreTag>
      <SignOutButton>Logout</SignOutButton>
    </div>
  );
}
Profile.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = state => state.global;

export default connect(mapStateToProps)(Profile);
