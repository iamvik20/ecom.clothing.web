import React, { Component } from 'react'
import  SHOP_DATA  from './shop.data.js';
import PreviewCollection from '../../Components/preview-collection/preview-collection';


class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                <h1>Collection</h1>
            {
                collections.map(({ id, ...ohterCollectionProps }) => (
                    <PreviewCollection key={id} {...ohterCollectionProps} />
                ))
            }
            </div>);
    }
}

export default Shop;
