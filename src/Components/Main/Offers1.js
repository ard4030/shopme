import React from 'react'
import { View, Text, StyleSheet , Image } from 'react-native'
import Ripple from 'react-native-material-ripple';
import off1 from "../../Images/off1.jpg";
import off2 from "../../Images/off2.jpg";
import off3 from "../../Images/off3.jpg";


const Offers1 = () => {
  return (
    <View style={styles.container}>
        <Ripple style={styles.contImg}>
          <Image style={styles.img} source={off1}/>
        </Ripple>
        <Ripple style={styles.contImg}>
          <Image style={styles.img} source={off2}/>
        </Ripple>
        {/* <Ripple style={styles.contImg}>
          <Image style={styles.img} source={off3}/>
        </Ripple>
        <Ripple style={styles.contImg}>
          <Image style={styles.img} source={{uri:'https://dkstatics-public.digikala.com/digikala-adservice-banners/7e592f32cca12c7fbe6b1659e0a23794ffda77d2_1666165678.jpg?x-oss-process=image/quality,q_95'}}/>
        </Ripple> */}

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
        flexWrap:'wrap'
    },
    img:{
        width:'100%',
        height:100,
        borderRadius:5,
    },
    contImg:{
        width:'48%',
        height:100,
        borderRadius:5,
        marginBottom:10
    }
})

export default React.memo(Offers1)