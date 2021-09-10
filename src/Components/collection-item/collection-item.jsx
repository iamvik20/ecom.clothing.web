import React from 'react'
import './collection-item.scss'


const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className='collection-item'>
      <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />  
        <div className='collection-footer'>
            <span className='name'><strong>{name}</strong></span>
            <span className='price'><strong>${price}</strong></span>
        </div>
    </div>
)

export default CollectionItem;