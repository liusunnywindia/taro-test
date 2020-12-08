import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export type  ComponentProps = {
  title?: string
  tip?: string
}

const CourseBox: Taro.FC<ComponentProps> = () => {
  const list =[
    { img:"https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course1.png",url:'https://yw.hexiaoxiang.com/view/go/6fa1'},
    { img:'https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course2.png',url:'https://yw.hexiaoxiang.com/view/go/2554'},
    { img:'https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course3.png',url:'https://yw.hexiaoxiang.com/view/go/9fd7'},
    { img:'https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course4.png',url:'https://yw.hexiaoxiang.com/view/go/752a'},
    { img:'https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course5.png',url:'https://yw.hexiaoxiang.com/view/go/b061'},
    { img:'https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course6.png',url:'https://yw.hexiaoxiang.com/view/go/28da'},
    { img:'https://sc2.hexiaoxiang.com/common/miniApp/multi_h5/alipay/course7.png',url:'https://yw.hexiaoxiang.com/view/go/4750'}
    ]

    const onPreview =(url) =>{
      Taro.navigateTo({
        url: `/pages/freeSignin/index?url=${url}`
      })
    }
  return (
    <View>
      {list.map(item =>{
           return ( 
           <View key={item.url} className='course-box'>
            <Image src={item.img}  className='list-img' onClick={()=>onPreview(item.url)} />
           </View>
           )
      })}

    </View>
  )
}

export default CourseBox