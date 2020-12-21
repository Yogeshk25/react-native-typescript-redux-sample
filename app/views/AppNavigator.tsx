import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import { RootState } from '../stores';
import { Pressable, Text } from 'react-native';
import AddUser from './AddUser';

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.auth.token !== null
  }
}

const mapDispatchToProps = {

}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type AppNavigatorProps = PropsFromRedux & {
  isLoggedIn: boolean;
}

interface AppNavigatorState {

}

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

export class AppNavigator extends Component<AppNavigatorProps, AppNavigatorState> {
  constructor(props: AppNavigatorProps) {
    super(props)

    this.state = {

    };
  };

  render() {
    return (
        // <NavigationContainer>
        //   <HomeStack.Navigator initialRouteName="Login">
        //   <HomeStack.Screen name="Login" component={Login} />
        //     <HomeStack.Screen name="Home" component={Home}
        //       options={({ navigation, route }) => ({
        //         headerRight: () => (
        //           <Pressable onPress={() => { navigation.navigate('AddUser') }}>
        //             <Text style={{ marginEnd: 10 }}>Add</Text>
        //           </Pressable>
        //         ),
        //       })} />
        //     <HomeStack.Screen name="AddUser" component={AddUser}
        //       options={{
        //         title: "Add User"
        //       }} />
        //   </HomeStack.Navigator>
        // </NavigationContainer>
      this.props.isLoggedIn ?
        <NavigationContainer>
          <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={Home}
              options={({ navigation, route }) => ({
                headerRight: () => (
                  <Pressable onPress={() => { navigation.navigate('AddUser') }}>
                    <Text style={{ marginEnd: 10 }}>Add</Text>
                  </Pressable>
                ),
              })} />
            <HomeStack.Screen name="AddUser" component={AddUser}
              options={{
                title: "Add User",
                headerBackTitle: "Back"
              }} />
          </HomeStack.Navigator>
        </NavigationContainer>
        :
        <NavigationContainer>
          <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login} />
          </AuthStack.Navigator>
        </NavigationContainer>
    );
  }
}

export default connector(AppNavigator)
