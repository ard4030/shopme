import React from 'react'
import { View , Text, Image, StyleSheet, Dimensions } from 'react-native'
import Ripple from 'react-native-material-ripple'
import Swiper from 'react-native-swiper'
import sl1 from "../../Images/sl1.jpg"
import sl2 from "../../Images/sl2.jpg"

const w =Dimensions.get('window').width;
const Slider1 = () => {
  return (
    <View style={styles.container}>
        <Swiper>
            <Ripple>
                <Image style={styles.img} source={sl1}/>
            </Ripple>
            <Ripple>
                <Image style={styles.img} source={sl2}/>
            </Ripple>
        </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height:w/2,
      width:'100%',
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
      overflow:'hidden'


    },
    img:{
        width:'100%',
        height:'100%'
    }
})

export default React.memo(Slider1)