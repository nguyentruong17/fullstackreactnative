import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from './components/Card';

export default class App extends React.Component {
    render () {
        return(
            <View style = {styles.container}>
                <Card 
                    fullName='Hanh Nguyen'
                    linkText='Comments'
                    onPressLinkText={()=>{
                        console.log('Link Pressed!')
                    }}
                    image={{ uri: 'https://unsplash.it/600/600' }}
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
    }
})