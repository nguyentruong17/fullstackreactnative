import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function CommentCard({
    linkText,
    imageId,
    onPressLinkText
}) {
    return (
        //the double negation makes sure we're working with boolean and thus conditional rendering
        // !!linkText will be false only when linkText is null or undefined (linkText is a string)
        !!linkText && (
            <TouchableOpacity onPress={()=>onPressLinkText(imageId)}>
                <Text numberOfLines={1}>{linkText}</Text>   
            </TouchableOpacity>
        )
    )
}

CommentCard.propTypes = {
    linkText: PropTypes.string.isRequired,
    imageId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    
})
