import React, { Component } from 'react'
import PureCanvas from '../PureCanvas'
class VideoCanvas extends Component {

  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
    this.saveContext = this.saveContext.bind(this)
    // this.onloadCanvasImage = this.onloadCanvasImage.bind(this)
  }

  saveContext(ctx) {
    this.ctx = ctx
    this.width = this.ctx.canvas.width
    this.height = this.ctx.canvas.height
  }

  componentDidMount() {
    this.image = new Image()
    this.image.src = this.props.src
  }

  // onloadCanvasImage() {
  //   console.log('Loading Image on Canvas')
  //   this.state.canvas.getContext('2d').drawImage(this.image, 0, 0, this.image.width, this.image.height)
  // }

  componentDidUpdate() {
    // const { angle } = this.props
    if(this.image.width * this.image.height > 0) {
      this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height)
    }else {
      // TODO: Show error image
      // ctx.drawImage()
      // TODO: Emit warning
    }

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      var aux = this.image.src.split('?killcache=');
      this.image.src = aux[0] + '?killcache=' + Math.random(42);
    }
  }
  render() {
    return(
      <div>
        {/* <canvas
          id='my-little-canvas'
          ref= {this.canvasRef} 
          width={this.props.width} height={this.props.height}>
          <img src='https://via.placeholder.com/150' />
        </canvas> */}
        <PureCanvas
          width={this.props.width}
          height={this.props.height}
          contextRef={this.saveContext} />
      </div>
    )
  }
}

export default VideoCanvas