import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native'; //should use FlatList in reality
import PropTypes from 'prop-types';

export default function CommentList({
    items
}){
    return(
        <ScrollView>
            {items.map((item, index) => (
                <View key={index} style={styles.comment}>
                    <Text>{item}</Text>
                </View>)
            )}
        </ScrollView>
    )

}

CommentList.propTypes = {
    items: PropTypes.arrayOf(
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

