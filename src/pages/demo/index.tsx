import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Demo() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello demo!</Text>
    </View>
  )
}
