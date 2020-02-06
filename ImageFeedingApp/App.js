import React from 'react';
import { StyleSheet, View } from 'react-native';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

const comments = ['a', 'b', 'c']

export default class App extends React.Component {

    render () {
        return(
            <View style = {styles.container}>
                {/*<Feed
                    style={styles.feed}
                />*/}
                <Comments
                    style = {styles.comment}
                    comments = {comments}
                    onClose = {()=>{
                        console.log('Close!')
                    }}
                    onSubmitComment={submittedComment =>{
                        console.log(`Submit!\n${submittedComment}`)
                    }}
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
    },
    comment: {
        flex: 1
    }
})