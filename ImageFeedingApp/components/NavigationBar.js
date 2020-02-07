import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function NavigationBar({
    title,
    linkText,
    onPressLinkText
}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.linkText} onPress={onPressLinkText}>
                <Text>{linkText}</Text>  
            </TouchableOpacity>
        </View>
    )
};

NavigationBar.propTypes = {
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    linkText: {
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    }
})