import React from 'react';
import { StyleSheet, View } from 'react-native';

import Feed from './screens/Feed';

export default class App extends React.Component {
    render () {
        return(
            <View style = {styles.container}>
                <Feed
                    style={styles.feed}
                />
            </View>    
            
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //flexDirection is inherited from the 'invisible' wrapper View with flexDirection defaulting to 'column'
        //justifyContent, same as above, 'flex-start'
        //alignItems, same as above, 'stretch'
    },
    feed: {
        flex: 1
    }
})