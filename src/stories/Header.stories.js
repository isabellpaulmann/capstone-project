import {withRouter} from 'storybook-addon-react-router-v6';

import Header from '../components/Header';

export default {
  title: 'components/Header',
  component: Header,
  decorators: [withRouter],
};

export const Default = () => <Header />;
