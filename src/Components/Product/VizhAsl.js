import React from 'react'
import { FlatList, StyleSheet, Text , View } from 'react-native'
import { vizhAs } from '../../Data/data'
import Entypo from 'react-native-vector-icons/dist/Entypo';

const VizhAsl = () => {
  return (
    <View style={styles.container}>
        <View>
           
           {
               vizhAs.map((item,index) => 
                <View style={styles.cont} key={index}>
                    <Text style={styles.val}>{item.value}</Text>
                    <Text style={styles.nogh}>:</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.dot}>
                        <Entypo size={20} color={'#000'} name={'dot-single'}/> 
                    </View>
                </View>
               )
           }
                
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    name:{
        color:'black',
        fontFamily:'iReg',
    },
    val:{
        color:'#38343e',
        fontFamily:'iNumLight',
    },
    cont:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    dot:{
        fontSize:4
    },
    nogh:{
        paddingHorizontal:10
    }
})

export default React.memo(VizhAsl)