import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function CommentCard({
    linkText,
    onPressLinkText
}) {
    return (
        //the double negation makes sure we're working with boolean and thus conditional rendering
        // !!linkText will be false only when linkText is null or undefined (linkText is a string)
        !!linkText && (
            <TouchableOpacity onPress={onPressLinkText}>
                <Text numberOfLines={1}>{linkText}</Text>   
            </TouchableOpacity>
        )
    )
}

CommentCard.propTypes = {
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    
})
