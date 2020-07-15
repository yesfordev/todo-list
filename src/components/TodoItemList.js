import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    static defaultProps = {
        item: [],
        onRemove: () => console.warn('onRemove is not defined'),
        onUpdate: () => console.warn('onUpdate is not defined'),
    } 

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.item !== this.props.item;
    }

    render() {
        console.log('reneder TodoItemList');
        const { item, onRemove, onUpdate } = this.props;
        const list = item.map(
            it => <TodoItem key={it.id} item={it} onRemove={onRemove} onUpdate={onUpdate} />
        )

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoItemList;