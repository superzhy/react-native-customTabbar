import React from 'react';
import {View, Text, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Tab} from './config';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
class MineScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => {
            navigation.navigate('Other');
          }}>
          Mine Screen
        </Text>
      </View>
    );
  }
}
class OtherScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>other Screen</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    // OTC: pages.Otc,
    Scanner: MineScreen,
    Mine: MineScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      console.log(Tab);
      const {text, iconPath, iconSelectPath} = Tab[routeName];
      return {
        tabBarIcon: res => {
          const {focused} = res;
          const iconUrl = focused ? iconSelectPath : iconPath;
          if (routeName === 'Scanner') {
            return (
              <Image
                source={iconUrl}
                style={{width: 60, height: 60, marginTop: -20}}
              />
            );
          }
          return <Image source={iconUrl} style={{width: 26, height: 26}} />;
        },
        // label
        tabBarLabel: ({tintColor}) => {
          if (routeName !== 'Scanner') {
            return (
              <Text
                style={{
                  color: tintColor,
                  fontSize: 9,
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                {text}
              </Text>
            );
          }
          return false;
        },
        tabBarOnPress: () => {
          if (routeName === 'Scanner') {
            console.log(routeName);
            navigation.navigate('Other');
            return;
          }
          navigation.navigate(routeName);
        },
      };
    },
  },
);

const AppNavigator = createStackNavigator({
  Tab: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Other: {
    screen: OtherScreen,
    navigationOptions: {
      header: null,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    },
  },
});

export default createAppContainer(AppNavigator);
