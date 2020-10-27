import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
  displayAlert = function (){
    alert("This is a Alert message ")
  }
  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress={this.displayAlert}
      />
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton color = "orange" />
        <Text>My First React Component</Text>
      </View>
    );
  }
}