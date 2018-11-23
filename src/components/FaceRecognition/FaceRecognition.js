import React from 'react'

const FaceRecognition = ({imageURL}) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img src={imageURL} alt='' style={{marginTop: 40, marginBottom: 40}}  width= '500' height='auto' /> />
      </div>
    </div>
  )
}

export default FaceRecognition;