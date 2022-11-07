import React from 'react'
import { View, Text, StyleSheet , Image } from 'react-native'
import Ripple from 'react-native-material-ripple';
import off1 from "../../Images/off1.jpg";
import off2 from "../../Images/off2.jpg";
import off3 from "../../Images/off3.jpg";


const Offers2 = () => {
  return (
    <View style={styles.container}>
        <Ripple style={styles.contImg}>
          <Image style={styles.img} source={off1}/>
        </Ripple>
        <Ripple style={styles.contImg}>
          <Image style={styles.img} source={off2}/>
        </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingTop:10,
        paddingHorizontal:10
    },
    img:{
        width:'100%',
        height:130,
        borderRadius:5,
    },
    contImg:{
        width:'48%',
        height:150,
        borderRadius:5,
    }
})

export default React.memo(Offers2)