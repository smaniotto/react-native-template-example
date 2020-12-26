import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const RootNavigator = createSwitchNavigator(
  {
    // add navigators
  },
  {
    initialRouteName: '', // add initial route
  }
);

export default createAppContainer(RootNavigator);
