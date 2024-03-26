import { Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'

function App() {
  const videoRef = useRef()
  const canvasRef = useRef()
  
  const buildVideoPlayer = () => {
    return <video width='500' ref={videoRef} controls onTimeUpdate={() => canvasRef.current.getContext('2d').drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height) }>
    <source src='./sample.mp4' type='video/mp4' />
  </video>
  }

  const buildEdgeDetector =() => {
    return <canvas id='canvas' ref={canvasRef} width='500' height='262' style={{'border': '1px solid black'}}></canvas>
  }

  return <Flex justify='center' align='center' gap='108px' margin='10%'>
    {buildVideoPlayer()}
    {buildEdgeDetector()}
  </Flex> 
}

export default App
