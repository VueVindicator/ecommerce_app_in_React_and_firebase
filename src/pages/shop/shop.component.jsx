import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/preview-collection/preview-collection'

class Shop extends Component {
    constructor(props){
        super(props)
          
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherValues}) => (
                        <CollectionPreview key={id} {...otherValues}/>
                    ))
                }
            </div>
        )
    }
}

export default Shop