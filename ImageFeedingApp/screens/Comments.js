import React from 'react';
import { SafeAreaView, ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';

import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

export default class Comments extends React.Component{
    static propTypes = {
        style: ViewPropTypes.style,
        comments: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
        onClose: PropTypes.func.isRequired,
        onSubmitComment: PropTypes.func.isRequired
    };
    static defaulTypes = {
        style: null,
    };
    render(){
        const { style, comments, onClose, onSubmitComment } = this.props;
        return(
            <SafeAreaView style={style}>
                <NavigationBar
                    title='Comments'
                    linkText='Close'
                    onPressLinkText={onClose}
                />
                <CommentInput
                    onSubmitComment={onSubmitComment}
                />
                <CommentList
                    comments={comments}
                />
            </SafeAreaView>
        )
    }
}

