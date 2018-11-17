import React from 'react'
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
        <p className='f3'>
            {'Detect the faces in your image by submitting the URL below'}
        </p>
        <div className='center'>
            <div className='center form transparent pa4 br3 shadow-3'>
                <input className='f5 pa2 w-70 center' type='text'/>
                <button className='w-30 grow f4 link ph3 pv2 dib'>Detect</button>
            </div>
        </div>
    </div>
  )
}

export default ImageLinkForm;