import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, Button } from 'react-native';
import Layouts from "./Json/Layouts.json";

class MyComponent extends Component {
  state = {
    Layouts: [ ],
    
  }
  componentDidMount() {
    this.setState({ Layouts });
  
  render() {
    return (
      <ScrollView>
        <View  >
        {Layouts &&
        Layouts.map((item, index) => (
          
          <View key={index}>
            {item.boxes.map((image, index) => (
              <Image
                key={index}
            source={{ uri: image.dirPath +image .fileNm }}
                style={{ width: image.w, height: image.h }}
              />
            ))}
          </View>
        ))}
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backfaceVisibility: 'visible',
  },

});
export default MyComponent;