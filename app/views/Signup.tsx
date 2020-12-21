import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';

interface SignupProps {

}

interface SignupState {
  username: string;
  password: string;
}

export default class Signup extends Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
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

  handleSignupClick() {
    console.log('signup clicked');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Signup
            </Text>
          <Text>Username</Text>
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
          <Button title="Signup" onPress={this.handleSignupClick} />
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
