import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

export default class App extends React.Component {
    state = {
        showModal: false,
        selectedItemId: null,
        idToCommentsMap: {
            0: ['a0', 'b0', 'c0'],
            1: ['a1', 'b1', 'c1']
        }
    }

    handleSelectItem = id => {
        console.log(`Id Selected: ${id}`)
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

    handleSubmitComment = (submittedComment) => {
        const { selectedItemId, idToCommentsMap } = this.state;
        const commentsForId = idToCommentsMap[selectedItemId] || []
        this.setState({
            idToCommentsMap: {
                ...idToCommentsMap,
                [selectedItemId]: [...commentsForId, submittedComment] 
            }
        })
        console.log(idToCommentsMap)
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