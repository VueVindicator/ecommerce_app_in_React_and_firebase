import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import selectDirectoryComponents from '../../redux/shop/shop-selector'
import CollectionPreview from '../../components/preview-collection/preview-collection'

const Shop = ({ collections }) =>  (
    <div className="shop-page">
        {
            collections.map(({id, ...otherValues}) => (
                <CollectionPreview key={id} {...otherValues}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    shop: selectDirectoryComponents
})

export default connect(mapStateToProps)(Shop)