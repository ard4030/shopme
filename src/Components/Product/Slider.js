import React from 'react'
import { Text , View , Image, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { productImgs } from '../../Data/data'

const w = Dimensions.get('window').width;

const Slider = () => {

  return (
    <View style={styles.container}>
        <Swiper>
            {
                productImgs.map((item,index) => 
                    <Image resizeMode='stretch' key={index} style={styles.img} source={{uri:item}}/>
                )
            }
            
        </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:w
    },
    img:{
        width:'100%',
        height:'100%'
    }
})

export default React.memo(Slider)