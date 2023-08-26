import React,{useState} from 'react';

const Card=({data})=>{
    const [info, setInfo]= useState("");
    console.log(data);
    const more=data.slice(0,3);
    return(
        <div className='topsearch'>
            {
                more.map((book)=>(
                    <div className='card'>
                        <div className='imgcontainer'>
                             <img className='img' src={book.volumeInfo.imageLinks.thumbnail}/>
                        </div>
                        <div className='description'>
                            <div className='desc'>
                                <h1>{book.volumeInfo.title}</h1>
                                <h2>{book.volumeInfo.subtitle}</h2>
                                
                                <div>{book.volumeInfo.description}</div>
                            </div>
                            <div>
                                <button className='read'>Now Read!</button>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default Card;
