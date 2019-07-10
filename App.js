import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
import UserMaps from './components/UserMaps';

export default class App extends React.Component {

  state = {
    userLocation: null
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(posisition => {
      this.setState({
        userLocation: {
          latitude: posisition.coords.latitude,
          longitude: posisition.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      })
    }, err => {console.log(err)});
  }
  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        <UserMaps userLocation={this.state.userLocation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
