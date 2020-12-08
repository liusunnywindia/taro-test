import Taro, { useState,useEffect,useRouter} from '@tarojs/taro'
import {WebView } from '@tarojs/components'
import './index.scss'
 
const FreeSign = () =>{
  const router = useRouter()
  const [link,setLink] = useState('')

  useEffect(()=>{
    console.log(router.params.url)
    const link = router.params.url
    setLink(link)
  },[])

    return (
      <WebView src={link} />
    )
  }



export default FreeSign

 
