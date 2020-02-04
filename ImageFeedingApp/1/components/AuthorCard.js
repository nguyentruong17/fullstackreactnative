import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import getInitials from '../utils/getInitials';
import getAvatarColor from '../utils/getAvatarColor';

export default function AuthorCard({
    fullName
}){

    return(
        <View style = {styles.container}>
                <Avatar 
                    initials={getInitials(fullName)} 
                    size={35} 
                    backgroundColor={getAvatarColor(fullName)}
                />
                <Text style={styles.text} numberOfLines={1}>
                    {fullName}
                </Text>

        </View>   
    )

};

AuthorCard.propTypes = {
    fullName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        marginHorizontal: 6
    }
})