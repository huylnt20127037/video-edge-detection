import { Flex } from '@chakra-ui/react'
import { useRef } from 'react'
import Sobel from 'sobel'

function App() {
  const videoRef = useRef()
  const canvasRef = useRef()

  const handleEdgeDetection = () => {
    let canvasContext = canvasRef.current.getContext('2d', { willReadFrequently: true })
    let videoFrame = videoRef.current
    let canvasWidth = canvasRef.current.width
    let canvasHeight = canvasRef.current.height

    canvasContext.drawImage(videoFrame, 0, 0, canvasWidth, canvasHeight);
    let imageData = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);
  
    let sobelData = Sobel(imageData);
  
    let sobelImageData = sobelData.toImageData();

    canvasContext.putImageData(sobelImageData, 0, 0);
  }

  const buildVideoPlayer = () => {
    return <video 
      ref={videoRef} 
      width='500' 
      controls 
      onTimeUpdate={handleEdgeDetection}
      style={{'border': '1px solid black', 'borderRadius': '8px'}}
      >
    <source src='./sample.mp4' type='video/mp4' />
  </video>
  }

  const buildEdgeDetector =() => {
    return <canvas 
      ref={canvasRef} 
      width='500' height='262' 
      style={{'border': '1px solid black', 'borderRadius': '8px'}}>
    </canvas>
  }

  return <Flex justify='center' align='center' gap='108px' margin='10%'>
    {buildVideoPlayer()}
    {buildEdgeDetector()}
  </Flex> 
}

export default App
