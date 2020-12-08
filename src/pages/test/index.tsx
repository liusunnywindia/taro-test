import Taro from '@tarojs/taro'
import { View,Button} from '@tarojs/components'
import './index.scss'

const  Home =()=> {
  const onGetAuthorize = () =>{
    Taro.getUserInfo({
      success: function(res) {
          console.log(res);
   }
  })
  
  }

  const onGetPhone = () =>{
    my.getPhoneNumber({
      success: (res) => {
        console.log(res);
          const encryptedData = res.response;
          my.request({
              url: '你的后端服务端',
              data: encryptedData,
          });
      },
      fail: (res) => {
          console.log(res);
          console.log('getPhoneNumber_fail');
      },
  });
  
  }
  const goto=()=>{
    Taro.navigateTo({
      url: '/pages/freeSignin/index',
    })
  }
  return (
      <View className='index'>
       <Button type='primary' onClick={goto}>跳转</Button>
       <Button type='primary' openType='getAuthorize' scope='userInfo' onGetAuthorize={onGetAuthorize}>获取</Button>
       <Button  open-type='getAuthorize' onGetAuthorize={onGetPhone}  scope='phoneNumber'>    授权手机号</Button>

      </View>

      )

}

export default Home

