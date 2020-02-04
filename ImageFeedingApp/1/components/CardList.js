import React  from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromId } from '../utils/api';
import Card from './Card';

export default class CardList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            //validate an object to have the fields that we want
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired
            })
        ).isRequired,
    };
    renderItem = ({ item: { id, author} }) => {
        //nested destructing, and is equivalent to 
        // renderItem = (obj) => {
        //      const id = obj.item.id
        //      const author = obj.item.author
        //
        return (
            <Card
                fullName={author}
                linkText='Comments'
                onPressLinkText={()=>{
                    console.log('Link Pressed!')
                }}
                image={
                    {uri: getImageFromId(id)}
                }
            />
        )
    };
    render() {
        const { items } = this.props;
        return(
            <FlatList
                data={items}
                renderItem={this.renderItem}
                //keyExtractor prop helps to instruct FlatList uniquely identify items
                // => FlatList determines when it needs to re-render items as they go in/out of the visible portion of the screen 
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}