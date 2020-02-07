import React from 'react';
import { StyleSheet, View, Modal, AsyncStorage, Alert } from 'react-native';
//AsyncStorage will be removed in the future release of react-native

import Feed from './screens/Feed';
import Comments from './screens/Comments';

const ASYNC_STORAGE_KEY = 'ASYNC_STORAGE_KEY';

export default class App extends React.Component {
    state = {
        showModal: false,
        selectedItemId: null,
        idToCommentsMap: {}
    };

    async componentDidMount() {
        try {
            const idToCommentsMap = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
            if (!!idToCommentsMap){
                this.setState({
                    idToCommentsMap: JSON.parse(idToCommentsMap)
                })
            }
        } catch (e) {
            Alert.alert(
                'System Alert',
                `Failed to load comments\n${e}`
            )
        }
    };

    handleSelectItem = id => {
        this.setState({
            showModal: true,
            selectedItemId: id
        })
    };

    handleCloseCommentsScreen = () => {
        this.setState({
            showModal: false,
            selectedItemId: null
        })
    };

    handleSubmitComment = async (submittedComment) => {
        const { selectedItemId, idToCommentsMap } = this.state;
        const commentsForId = idToCommentsMap[selectedItemId] || [];
        this.setState({
            idToCommentsMap: {
                ...idToCommentsMap,
                
                //when defining object literal, we can dynamically compute property names by 
                //putting array brackets around the property name
                //e.g: const name = 'foo'; const obj = { [name]: 'bar' };
                
                [selectedItemId]: [...commentsForId, submittedComment] 
                
            }
        });
        
        try {
            await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(idToCommentsMap));
        } catch (e) {
            Alert.alert(
                'System Alert',
                `Failed to save comments\n${e}`
            )
        }
    }

    render () {
        const { showModal, selectedItemId, idToCommentsMap } = this.state;
        return(
            <View style = {styles.container}>
                <Feed
                    style={styles.feed}
                    onSelectItem={this.handleSelectItem}
                    idToCommentsMap = {idToCommentsMap}
                />
                <Modal 
                    visible={showModal}
                    animationType='slide'
                    onRequestClose={this.handleCloseCommentsScreen}
                >
                    <Comments
                        style = {styles.comment}
                        id={selectedItemId}
                        comments = {idToCommentsMap[selectedItemId] || []}
                        onClose = {this.handleCloseCommentsScreen}
                        onSubmitComment={this.handleSubmitComment}
                    />
                </Modal>                
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