import React from 'react';
import {
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    ActivityIndicator,
    StatusBar,
    View
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather'
import { fetchLocationId, fetchWeather } from './utils/api'

import SearchInput from './components/SearchInput'

const defaultLocation = 'Ho Chi Minh City'

export default class App extends React.Component {
    //class properties transformation from Babel, same as using a constructor
    state = {
            loading: false,
            error: false,
            location: '',
            weather: '',
            temperature: 0,
    };

    handleUpdateLocation = async newLocation => {
        //if (!newLocation) return //I think we checked for this in our handle method in the SearchInput?

        this.setState({ loading: true }, async () => {
            try {
                const locationID = await fetchLocationId(newLocation)
                const { location, weather, temperature } = await fetchWeather(locationID)
                this.setState({
                    loading: false,
                    error: false,
                    location: location,
                    weather: weather,
                    temperature: temperature
                })
            } catch (e) {
                this.setState({
                    loading: false, //repeated code
                    error: true // how to handle this...
                })

            } //the mighty old Java lol
        });

    };

    componentDidMount() {
        this.handleUpdateLocation(defaultLocation)
    }

    render() {
        const { loading, error, location, weather, temperature } = this.state

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <ImageBackground
                    source={getImageForWeather(weather)} /* what happens if some error happen and we don't have our weather info?*/
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                >
                    <View style={styles.detailsContainer}>
                        <ActivityIndicator animating={loading} color="white" size="large" />

                        {/*!loading && <...> means that this statement will evaluate and display the
                        lement if and only if loading is false.*/}

                        {!loading && (
                            <View>
                                {/*same as above, and these are called conditional rendering*/}
                                {error && (
                                    <Text style={[styles.smallText, styles.textStyle]}>
                                        Could not load weather, please  check your connection or try a different city.
                                    </Text>
                                )}

                                {!error && (
                                    <View>
                                        <Text style={[styles.largeText, styles.textStyle]}>
                                            {location}
                                        </Text>
                                        <Text style={[styles.smallText, styles.textStyle]}>
                                            {weather}
                                        </Text>
                                        <Text style={[styles.largeText, styles.textStyle]}>
                                            {`${Math.round(temperature)}°`}
                                        </Text>
                                    </View>
                                )}

                                <SearchInput
                                    placeholder="Search any city"
                                    onSubmit={this.handleUpdateLocation} />
                            </View>
                        )}
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingHorizontal: 20
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white'
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },

});
