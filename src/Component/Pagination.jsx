import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [images, setImages] = useState([])
    const getImages = async() => {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
        const jsonData = await response.json()
        setImages(jsonData)
    }

    useEffect(() => {
       getImages()
    },[])

    

  return (
    <>
      <div>
        <div className="image-container">
          {images.map((image, index) => (
              <img key={index} src={image.download_url} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Pagination