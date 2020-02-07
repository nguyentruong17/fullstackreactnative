import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import AuthorCard from './AuthorCard';
import CommentCard from './CommentCard';

export default function ImageInfoRow({
    fullName, 
    linkText,
    imageId,
    onPressLinkText
}){
    return(
        <View style={styles.container}>
            <AuthorCard fullName={fullName} style={styles.authorCard}/>
            <CommentCard linkText={linkText} imageId={imageId} onPressLinkText={onPressLinkText}/>
        </View>
    )

};

ImageInfoRow.propTypes = {
    fullName: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    imageId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center'
    }
})