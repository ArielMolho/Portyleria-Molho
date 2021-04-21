import React from 'react'
import Item from '../Item/Item';

export default function List({dataInput}) {

    return (
        <div className="d-flex flex-md-row justify-content-around flex-wrap">
        {
            dataInput.map((data) => { 
            return (
                <Item key={data.id} data={data} />
            )
            })
        }
        </div>
    )
}