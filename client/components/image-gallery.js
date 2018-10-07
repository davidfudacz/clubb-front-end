import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import { defaultBorder } from '../styles';

const headerStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '10px',
}

const ImageGallery = ({ images, header }) => (
  <div style={ defaultBorder }>
    {
      header ? <div style={headerStyle}>{ header }</div> : null
    }
    <ReactImageGallery items={ images } autoPlay={ true } />
  </div>
)

export default ImageGallery
