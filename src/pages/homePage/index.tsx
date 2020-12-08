import Taro from '@tarojs/taro'
import CourseBox from '@/components/courseBox'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'


const Home = () => {

  return (
    <View className='home-page'>
      <View className='home-head'>
        <Image src='https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/free-btn.png' className='free-btn' />
      </View>
      <View className='img-box'><Image src='https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/ad.png' className='ad' /></View>
      <View className='contains'><Text className='home-title'>免费领课</Text></View>
      <View className='course-list'>
        <CourseBox></CourseBox>
      </View>
    </View>

  )

}

export default Home

