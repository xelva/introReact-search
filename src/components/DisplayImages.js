import React from 'react';
import './DisplayImages.css'
import ImageCard from './ImageCard';


const DisplayImages = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    return (
        <div className="image-list">
            {images}
        </div>
    )
}



export default DisplayImages; 