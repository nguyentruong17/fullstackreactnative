import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import ImageInfoRow from './ImageInfoRow';
import NavigationBar from './NavigationBar'

export default class Card extends React.Component {
    static propTypes = {
        fullName: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        onPressLinkText: PropTypes.func.isRequired,
        image: Image.propTypes.source.isRequired
    }

    state = {
        loading: true,
    };

    handleLoad = () => {
        this.setState({ loading: false });
    }
    //<ImageInfoRow 
    //fullName={fullName}
    //linkText={linkText}
    //onPressLinkText={onPressLinkText}/>
    //
    render() {
        const { fullName, linkText, onPressLinkText, image } = this.props;
        const { loading } = this.state;

        return (
            <View>
                
                <ImageInfoRow 
                    fullName={fullName}
                    linkText={linkText}
                    onPressLinkText={onPressLinkText}
                />
                <View style={styles.image}>
                    {loading && (
                        <ActivityIndicator style={StyleSheet.absoluteFill} size='large'/>
                    )}
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={image}
                        onLoad={this.handleLoad} 
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
        //flexDirection is inherited from the 'invisible' wrapper View with flexDirection defaulting to 'column'
        //justifyContent, same as above, 'flex-start'
        //alignItems, same as above, 'stretch'
    }
})