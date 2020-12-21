import React, { Component, Dispatch } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { User } from '../models/user';
import { RootState } from '../stores';
import { add } from '../stores/user/actions';
import { UserActionTypes } from '../stores/user/types';

const mapStateToProps = (state: RootState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => {
  return {
    onAddUser: (user: User) => dispatch(add(user))
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type AddUserProps = PropsFromRedux & {
  navigation: any
}

interface AddUserState {
  name: string;
  gender: string;
  phone: string;
}

export class AddUser extends Component<AddUserProps, AddUserState> {
  constructor(props: AddUserProps) {
    super(props)

    this.state = {
      name: '',
      gender: 'Male',
      phone: ''
    };
  };

  updateName(val: string) {
    this.setState({ name: val });
  }

  updateGender(val: string) {
    this.setState({ gender: val });
  }

  updatePhone(val: string) {
    this.setState({ phone: val });
  }

  saveUser() {
    let user = new User(Math.random(), this.state.name, this.state.gender, this.state.phone);
    this.props.onAddUser(user);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={this.state.name} onChangeText={(val) => { this.updateName(val) }} />
          <Text style={styles.label}>Gender</Text>
          {/* <Picker
            selectedValue={this.state.gender}
            style={{ backgroundColor: 'red', position: 'absolute', left: 0, bottom: 0, right: 0 }}
            onValueChange={(itemValue, itemIndex) => {
              this.updateGender(itemValue.toString());
            }}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker> */}
          <View style={{marginTop: 10, marginBottom: 10, padding: 10, backgroundColor: '#f7f8f8'}}>
          <View style={styles.rdbContainer}>
            <Text>Male</Text>
            <RadioButton
              value="Male"
              status={this.state.gender === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => this.updateGender('Male')}
            />
          </View>
          <View style={styles.rdbContainer}>
            <Text>Female</Text>
            <RadioButton
              value="Female"
              status={this.state.gender === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => this.updateGender('Female')}
            />
          </View>
          <View style={styles.rdbContainer}>
            <Text>Other</Text>
            <RadioButton
              value="Other"
              status={this.state.gender === 'Other' ? 'checked' : 'unchecked'}
              onPress={() => this.updateGender('Other')}
            />
          </View>
          </View>
          <Text style={styles.label}>Phone</Text>
          <TextInput style={styles.input} value={this.state.phone} onChangeText={(val) => { this.updatePhone(val) }} />
          <Button title="Save" onPress={() => {this.saveUser()}} />
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
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    padding: 10,
    backgroundColor: '#f7f8f8'
  },
  rdbContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
});

export default connector(AddUser)
