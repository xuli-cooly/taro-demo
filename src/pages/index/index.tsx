import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text onClick={() => Taro.navigateTo({ url: '/pages/demo/index' })}>Hello world!</Text>
    </View>
  )
}
