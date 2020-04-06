import React from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
//import "./comp./components/Questions";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to The Mobile Dev Review Game!</Text>
        <Button
          style = {styles.button}
          title = "Play"
          onClick = {() => navigate("questions")}
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
    backgroundColor: '#fed8b1',
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

