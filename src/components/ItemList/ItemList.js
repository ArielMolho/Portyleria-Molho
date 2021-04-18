import React, {useState} from 'react'
import Item from '../Item/Item';

export default function List({dataInput}) {
    const [number, setNumber] = useState(0);

    function onIncrement(){
        setNumber(number + 1)
    }

    function onDecrement(){
        setNumber(number - 1)
    }
    return (
        <div className="d-flex flex-md-row justify-content-around flex-wrap">
        {
            dataInput.map((data) => { 
            return (
                <Item key={data.id} data={data} number={number} increment={onIncrement} decrement={onDecrement}/>
            )
            })
        }
        </div>
    )
}

/*
        <ul>
        {
            postsInput.map((post) => { 
            return (
                <Item key={post.id} post={post} />
            )
            })
        }
        </ul>
*/