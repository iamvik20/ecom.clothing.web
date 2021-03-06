import React from 'react';
import { Route } from 'react-router';
import  CollectionsOverview  from '../../Components/collections-overview/collections-overview';
import CollectionPage from '../category/collection-page';

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId` }  component={CollectionPage} />
    </div>
);



export default Shop;
