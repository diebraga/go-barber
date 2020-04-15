import React from 'react';

// import { Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/background';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
