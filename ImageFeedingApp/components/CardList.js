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
        onSelectItem: PropTypes.func.isRequired,
        idToCommentsMap: PropTypes.objectOf(
            PropTypes.arrayOf(
                PropTypes.string.isRequired
            )
        )
    };
    renderItem = ({ item: { id, author} }) => {
        //nested destructing, and is equivalent to 
        // renderItem = (obj) => {
        //      const id = obj.item.id
        //      const author = obj.item.author
        //
        const { onSelectItem, idToCommentsMap } = this.props;
        return (
            <Card
                fullName={author}
                linkText={idToCommentsMap[id] ? `${idToCommentsMap[id].length} comments`: 'Comment'}
                onPressLinkText={() =>  onSelectItem(id)}
                image={
                    {uri: getImageFromId(id)}
                }
            />
        )
    };
    render() {
        const { items, idToCommentsMap } = this.props;
        return(
            <FlatList
                data={items}
                renderItem={this.renderItem}
                
                //keyExtractor prop helps to instruct FlatList uniquely identify items
                // => FlatList determines when it needs to re-render items as they go in/out of the visible portion of the screen 
                keyExtractor={item => item.id.toString()}

                //FlatList will only re-render an item when the data prop changes or when scrolling. 
                //In this case, we pass the items prop of CardList into the data prop of FlatList, 
                //but our idToCommentsMap prop doesn’t cause the items array to change, so the FlatList
                //won’t update when new comments are added. We can use the prop extraData of FlatList to inform
                //the FlatList that it should monitor another source of input data for changes.
                extraData={idToCommentsMap}
            />
        )
    }
}