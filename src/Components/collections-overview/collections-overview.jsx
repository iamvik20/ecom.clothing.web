import React from 'react';
import './collections-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection';

const CollectionsOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({ id, ...ohterCollectionProps }) => (
                <PreviewCollection key={id} {...ohterCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);