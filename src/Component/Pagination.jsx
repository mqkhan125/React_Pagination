import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [images, setImages] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const getImages = async() => {
       setIsLoading(true)
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
        const jsonData = await response.json()
        setImages(jsonData)
        setIsLoading(false)
    }

    useEffect(() => {
       getImages()
    },[pageNo])

    const nextButtons = Array.from({length: 4}, (_, index) => pageNo+index)
    console.log(nextButtons)

    const prevButtons = Array.from({length: 3}, (_, index) => pageNo-1-index).filter((value) => value > 0).reverse()
    console.log(prevButtons)

    const margedButtons = [...prevButtons, ...nextButtons]
    console.log(margedButtons)

  return (
    <>
      <div>
        <h2 className="title">Image Gallery Pagination</h2>
        {isLoading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} src={image.download_url} alt={`Image ${index}`} />
          ))}
        </div>

        <div className="buttons">
          <button onClick={() => setPageNo(pageNo - 1)} disabled={pageNo === 1}>
            Prev
          </button>
          {margedButtons.map((currentButton) => (
            <button
              onClick={() => setPageNo(currentButton)}
              key={currentButton}
              className={currentButton === pageNo ? "active" : ""}
            >
              {currentButton}
            </button>
          ))}
          <button onClick={() => setPageNo(pageNo + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Pagination