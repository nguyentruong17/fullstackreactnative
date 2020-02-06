import React from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Avatar({
    initials, 
    size, 
    backgroundColor
}) {
    //style object is dynamically computed ==> 'inline' 
    // for styles that aren't dynamic, we should use thee StyleSheet API to avoid cluttering
    const style = {
        width: size,
        height: size,
        borderRadius: size/2, //this makes our View to be shaped as a circle
        backgroundColor
    };

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    );
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
})