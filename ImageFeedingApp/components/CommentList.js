import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native'; //should use FlatList in reality
import PropTypes from 'prop-types';

export default function CommentList({
    comments
}){
    return(
        <ScrollView>
            {comments.map((item, index) => (
                <View key={index} style={styles.comment}>
                    <Text>{item}</Text>
                </View>)
            )}
        </ScrollView>
    )

}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
};

const styles = {
    comment: {
        marginLeft: 20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
}

