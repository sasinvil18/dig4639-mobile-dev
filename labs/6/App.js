import React from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
//import "./comp./components/Questions";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  render(){

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to The Mobile Development Review Game!</Text>
        <Button
          style = {styles.button}
          title = "Play"
          onClick = {() => navigate("playGame")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    color: '#800000',
  },
});

