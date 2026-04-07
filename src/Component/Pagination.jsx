import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const getImages = async() => {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}1&limit=5`)
        const jsonData = await response.json()
        setImages(jsonData)
    }

    useEffect(() => {
       getImages()
    },[page])


    

  return (
    <>
      <div>
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} src={image.download_url} alt={`Image ${index}`} />
          ))}
        </div>

        <div className="buttons">
          <button onClick={() => setPage(page - 1)} disabled= {page === 1}> Prev </button>
          <button>{page}</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Pagination