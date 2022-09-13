/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start driving the Green Economy with both funding or bond options from us.',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'The world\'s first green bond and investment fund exchange.',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Explore our Markets',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Bonds available by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
