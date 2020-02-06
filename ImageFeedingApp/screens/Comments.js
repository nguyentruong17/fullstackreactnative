import React from 'react';
import { SafeAreaView, ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';

import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

export default class Comments extends React.Component{
    render(){
        const { style, comments, onClose, onSubmitComment } = this.props;
        return(
            <SafeAreaView style={{flex: 1}}>
                <NavigationBar
                    title='Comments'
                    linkText='Close'
                    onPressLinkText={onClose}
                />
                <CommentInput
                    onSubmitComment={onSubmitComment}
                />
                <CommentList
                    items={comments}
                />
            </SafeAreaView>
        )
    }
}

