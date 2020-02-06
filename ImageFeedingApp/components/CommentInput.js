import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class CommentInput extends React.Component{
    static propTypes = {
        onSubmitComment: PropTypes.func.isRequired
    }
    state = {
        commentText: '',
    };
    handleCommentTextChange = (commentText) => {
        this.setState({ commentText });
    };
    handleCommentTextSubmit = () => {
        const { onSubmitComment } = this.props;
        const { commentText } = this.state;

        if(!commentText) return;

        onSubmitComment(commentText)

        this.setState({ commentText: '' });
    };
    render() {
        const { commentText } = this.state;
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder='Leave a comment'
                    placeholderTextColor='#2F4F4F'
                    value={commentText}
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
                    onChangeText={this.handleCommentTextChange}
                    onSubmitEditing={this.handleCommentTextSubmit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.4)',
    },
    textInput: {
        flex: 1 
    }
})