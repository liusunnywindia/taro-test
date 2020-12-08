import Taro ,{useState}from '@tarojs/taro'
import CourseBox from '@/components/courseBox'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'


const Home = () => {
  const [url,setUrl] = useState('https://yw.hexiaoxiang.com/view/go/6fa1')
const gotoUrl = () => {
  Taro.navigateTo({
    url: `/pages/freeSignin/index?url=${url}`
  })
}
  return (
    <View className='home-page'>
      <View className='home-head' onClick={gotoUrl}>
        <Image src='https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/free-btn.png' className='free-btn' />
      </View>
      <View className='img-box'>
        <Image src='https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/ad.png' className='ad'  onClick={gotoUrl} />
      </View>
      <Image onClick={gotoUrl} src='https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/free.png' className='ad-free' />
      <View className='contains'><Text className='home-title'>免费领课</Text></View>
      <View className='course-list'>
        <CourseBox />
      </View>
    </View>

  )

}

export default Home

