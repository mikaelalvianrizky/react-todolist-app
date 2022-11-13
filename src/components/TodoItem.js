import PropTypes from 'prop-types';
import Button from './Button.js'; 

import '../style/TodoItem.css';

const Item = ({ item, del, open }) => {
    const delById = (id) => {
        del(id)
    }

    return (
        <div className="Item">
            <p>{ item.title }</p>
            <div>
                <Button text="Edit" variant="warning" action={() => open(item.id, item.title)} />
                <Button text="Delete" variant="danger" action={ () => delById(item.id) } />
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
}

export default Item;