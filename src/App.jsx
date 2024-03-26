import { Flex } from '@chakra-ui/react'
import { useState } from 'react'

function App() {

  const buildVideoPlayer = () => {
    return <video width='50%' controls>
    <source src='./sample.mp4' type='video/mp4' />
  </video>
  }

  const buildEdgeDetector =() => {
    return <video width='50%' controls>
    <source src='./sample.mp4' type='video/mp4' />
  </video>
  }

  return <Flex justify='center' align='center' gap='36px' margin='10%'>
    {buildVideoPlayer()}
    {buildEdgeDetector()}
  </Flex> 
}

export default App
