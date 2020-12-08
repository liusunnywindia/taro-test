import Taro, { useState,useEffect} from '@tarojs/taro'
import {WebView } from '@tarojs/components'
import './index.scss'
 
const FreeSign = () =>{

  const [link,setLink] = useState('')

  useEffect(()=>{
    const link = 'https://sc2.hexiaoxiang.com/createHtml/1604750994350.html'
    setLink(link)
  },[])

    return (
      <WebView src={link} />
    )
  }



export default FreeSign

 
