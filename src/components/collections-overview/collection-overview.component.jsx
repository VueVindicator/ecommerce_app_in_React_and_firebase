import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import selectShopComponents from '../../redux/shop/shop-selector'
import CollectionPreview from '../preview-collection/preview-collection'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherValues}) => (
                <CollectionPreview key={id} {...otherValues}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopComponents
})

export default connect(mapStateToProps)(CollectionsOverview)