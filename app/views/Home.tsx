import React, { Component, Dispatch } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';
import { User } from '../models/user';
import { RootState } from '../stores';
import { deleteUser } from '../stores/user/actions';
import { UserActionTypes } from '../stores/user/types';

const mapStateToProps = (state: RootState) => {
  return {
    users: state.user.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => {
  return {
    onDelete: (id: number) => dispatch(deleteUser(id)),
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type HomeProps = PropsFromRedux & {
  navigation: any
}

interface HomeState {

}

export class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)

    this.state = {

    };
  };

  deleteUser(user: User) {
    this.props.onDelete(user.id);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList data={this.props.users} 
          keyExtractor={(item, index) => String(index)}
          renderItem={
            ({ item }) =>
            (
              <View style={{ margin: 5, padding: 5, backgroundColor: '#dadce0', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>{item.name}</Text>
                <Pressable onPress={()=> {this.deleteUser(item);}}>
                  <Image source={require('../img/delete.png')} />
                </Pressable>
              </View>
            )
          }
          />
        </View>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

export default connector(Home)
