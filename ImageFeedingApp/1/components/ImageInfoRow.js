import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import AuthorCard from './AuthorCard';
import CommentCard from './CommentCard';

export default function ImageInfoRow({
    fullName, 
    linkText,
    onPressLinkText
}){
    return(
        <View style={styles.container}>
            <AuthorCard fullName={fullName} style={styles.authorCard}/>
            <CommentCard linkText={linkText} onPressLinkText={onPressLinkText}/>
        </View>
    )

};

ImageInfoRow.propTypes = {
    fullName: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10
    }
})