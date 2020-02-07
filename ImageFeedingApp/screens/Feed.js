import React from 'react';
import { ActivityIndicator, Text, ViewPropTypes, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { fetchImages } from '../utils/api';

import CardList from '../components/CardList';

export default class Feed extends React.Component{
    static propTypes = {
        //We cant use PropTypes.object to represent a style, but Styles created with StyleSheet.create are represented as numbers
        // Also, ViewPropTypes.style provides in-depth type-checking of each key and value, which is very valuable.
        style: ViewPropTypes.style,
        onSelectItem: PropTypes.func,
        idToCommentsMap: PropTypes.objectOf(
            PropTypes.arrayOf(
                PropTypes.string.isRequired
            )
        )
    };

    static defaultTypes = {
        style: null,
    };

    state = {
        loading: true,
        error: false,
        items: []
    };

    async componentDidMount() {
        try{
            const items = await fetchImages();
            this.setState({
                loading: false,
                items
            })
        } catch(e) {
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    render() {
        const { style, onSelectItem, idToCommentsMap } = this.props;
        const { loading, error, items } = this.state;
        //console.log(onSelectItem)

        if (loading) {
            return( <ActivityIndicator size='large'/>)
        }

        if (error) {
            return( <Text>{`Error loading images...\n${error}`}</Text>)
        }

        return(
            <SafeAreaView style={style}>
                <CardList 
                    items={items}
                    onSelectItem={onSelectItem}
                    idToCommentsMap={idToCommentsMap}
                />

            </SafeAreaView>
        )
    }


}
