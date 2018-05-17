
import React from "react";
import ListItem from '../list-item/list-item'


export default function ToDoList (props){
    const { items, removeItem, checkItem, editItem } = props;

    const itemsList = items.map((item) => {
        return (
            <ListItem
                key={item.id}

                item={item}
                removeItem={removeItem}
                checkItem={checkItem}
                editItem={editItem}
            />
        );
    });
    return (<ul className="list-group">
        {itemsList}
        </ul>)
}
