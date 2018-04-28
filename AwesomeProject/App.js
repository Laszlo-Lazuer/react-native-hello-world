import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  countDown = () => {
    this.setState({
      count: (this.state.count > 0) ? this.state.count - 1: this.state.count
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Laszlo's React Native Hello World iOS (Counter)</Text>
        <Text>Count: {this.state.count}</Text>
        <Button title="+" onPress={this.countUp}/>
        <Button title="-" onPress={this.countDown}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
