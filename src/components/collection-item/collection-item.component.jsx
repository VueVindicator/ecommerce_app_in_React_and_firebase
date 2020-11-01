import React from 'react'

import './collection-item.component.scss'
import Button from '../button-component/button-component'

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button inverted>Add to cart</Button>
    </div>
)

export default CollectionItem