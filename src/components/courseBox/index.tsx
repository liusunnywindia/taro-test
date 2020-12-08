import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

export type  ComponentProps = {
  title?: string
  tip?: string
}

const courseBox: Taro.FC<ComponentProps> = () => {

  return (
    <View className='course-box'>
      <View className='box-left'>
        <Image mode='scaleToFill' src='' className='course-img' />
        <View className='course-info'>
          <Text className='course-title'>哈佛外教英语课</Text>
          <Text className='course-tip'>锻炼孩子逻辑思维能力 </Text>
        </View>
      </View>
      <View className='box-right'>免费领取</View>
    </View>
  )
}

export default courseBox