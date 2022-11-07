import React from 'react'
import { Text , AppRegistry,SafeAreaView ,StatusBar , View } from 'react-native'

const StatusBar1 = () => {

    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={ backgroundColor }>
          <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
          </SafeAreaView>
        </View>
      );

  return (
    <MyStatusBar backgroundColor="#eee" barStyle="light-content" />
  )
}

export default StatusBar1