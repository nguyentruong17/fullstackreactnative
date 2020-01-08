import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather'

import SearchInput from './components/SearchInput'

export default class App extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ImageBackground
                    source = {getImageForWeather('Clear')}
                    style = {styles.imageContainer}
                    imageStyle = {styles.image}
                >
            <View style={styles.detailsContainer}>
              <Text style={[styles.largeText, styles.textStyle]}>Ho Chi Minh City</Text>
              <Text style={[styles.smallText, styles.textStyle]}>Sunny</Text>
              <Text style={[styles.largeText, styles.textStyle]}>96°</Text>
  
              <SearchInput placeholder="Search any city" />
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      );
    }
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
        //alignItems: 'center', // remove these in order to make the ImageBackground component
        //justifyContent: 'center', // to take up the entire space of its parent - which is this container

    },
    imageContainer: {
        // the component with this style will expand to take up any room remaning 
        // in their parent container in realtion to any sibling components 
        flex: 1, 
    },
    image: {
        flex: 1, 
        width: null, //by default, the component would use the actual size of the image
        height: null, //define to null so that the dimensions of the image fit its container
        resizeMode: 'cover', //when the actual size of the image does not match the container's dimension, 'cover' means scale uniformly
    },
    detailsContainer: {
        flex: 1, // the container takes up the whole space of its component - ImageBackground
        justifyContent: 'center', //center of the screen
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white',
      },
      largeText: {
        fontSize: 44,
      },
      smallText: {
        fontSize: 18,
      },

});
