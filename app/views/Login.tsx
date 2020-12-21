import React, { Component, Dispatch } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Alert, Platform } from 'react-native';
import { connect, ConnectedProps } from 'react-redux'
import { login } from '../stores/auth/actions';
import { RootState } from '../stores';
import { AuthActionTypes } from '../stores/auth/types';

const mapStateToProps = (state: RootState) => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => {
  return {
    onLogin: (username: string, password: string) => dispatch(login(username, password)),
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type LoginProps = PropsFromRedux & {
  navigation: any
}

interface LoginState {
  username: string;
  password: string;
}

export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)

    this.state = {
      username: '',
      password: ''
    };
  };

  handleUsernameChange(val: string) {
    this.setState({
      username: val
    });
  }

  handlePasswordChange(val: string) {
    this.setState({
      password: val
    });
  }

  handleLoginClick() {
    if (this.state.username == '' || this.state.password == '') {
      Alert.alert(
        'Error',
        'Username and password can not be blank',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } else {
      this.props.onLogin(this.state.username, this.state.password);
    }

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text> Username</Text>
          <TextInput style={styles.input}
            placeholder='Enter username'
            value={this.state.username}
            onChangeText={(val) => this.handleUsernameChange(val)} />
          <Text>Password</Text>
          <TextInput style={styles.input}
            placeholder='Enter password'
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(val) => this.handlePasswordChange(val)} />
          <Button title="Login" onPress={() => this.handleLoginClick()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center', fontSize: 24, fontWeight: '600', marginBottom: 60
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    padding: 10,
    backgroundColor: '#f7f8f8'
  }
});

export default connector(Login)
