import { createStackNavigator ,createBottomTabNavigator} from 'react-navigation'

// import MainScreen from './main/MainScreen'


import TabBar from './tabbar/TabbarScreen';
import React, { Component } from 'react';
import { View } from 'react-native'
import Home from './main/MainScreen'
import TopUp from './topup/TopUpScreen'
import DemoChart from './addFriend/demoChart'
 class MainScreen extends Component{
    render() {
        return (
            <TabBar>
                <TabBar.Item
                  icon={require('../assets/images/home.png')}
                  selectedIcon={require('../assets/images/home.png')}
                  title="Tab1"
                  screenBackgroundColor={{ backgroundColor: '#D3D3D3' }}
              >
                {/* <View>
                </View> */}
                <Home navigation={this.props.navigation}></Home>
              </TabBar.Item>
              <TabBar.Item
                  icon={require('../assets/images/voucher.png')}
                  selectedIcon={require('../assets/images/voucher.png')}
                  title="Tab1"
                  screenBackgroundColor={{ backgroundColor: '#008080' }}
              >
                <View>
                    {/*Page Content*/}
                </View>
              </TabBar.Item>
              <TabBar.Item
                  icon={require('../assets/images/camera-shutter.png')}
                  selectedIcon={require('../assets/images/camera-shutter.png')}
                  title="Tab2"
                  screenBackgroundColor={{ backgroundColor: '#F08080' }}
              >
                  <View>
                      {/*Page Content*/}
                  </View>
              </TabBar.Item>
              <TabBar.Item
                  icon={require('../assets/images/map.png')}
                  selectedIcon={require('../assets/images/map.png')}
                  title="Tab3"
                  screenBackgroundColor={{ backgroundColor: '#485d72' }}
              >
                <View>
                    {/*Page Content*/}
                </View>
              </TabBar.Item>
              <TabBar.Item
                  icon={require('../assets/images/man.png')}
                  selectedIcon={require('../assets/images/man.png')}
                  title="Tab3"
                  screenBackgroundColor={{ backgroundColor: '#485d72' }}
              >
                <View>
                    {/*Page Content*/}
                </View>
              </TabBar.Item>
            </TabBar>
        );
    }
}


const routeConfig = {
    MainScreen: MainScreen,
    TopUp:TopUp,
    DemoChart:DemoChart,
}

const stackConfig = {
    //initialRouteName: 'MainScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
        gesturesEnabled: true,
    }
}


export default MainNavigator = createStackNavigator(routeConfig, stackConfig)
// export default MainScreen = createBottomTabNavigator({
//     MainScreen:MainScreen
// })
