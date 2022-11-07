import React from 'react'
import { View , Text, StyleSheet, FlatList, Image , I18nManager } from 'react-native'
import Ripple from 'react-native-material-ripple'
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';


I18nManager.forceRTL(true)
const Slider2 = ({title,data}) => {
  return (
    <View>
        <View style={styles.contTitAsl}>
          <Text style={styles.titAsl}>{title}</Text>
          <Text style={styles.viewAll}>مشاهده همه</Text>
        </View>
        <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item,index}) => 
         <Ripple>
           <View style={styles.contItem}>
             <Image style={styles.img} source={{uri:item.img}}/>
             <Text style={styles.eName}>{item.e_name}</Text>
             <Text style={styles.pName}>{item.p_name}</Text>
             {/* <Stars /> */}
             <View style={styles.conPrice1}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.price1}>تومان</Text>
             </View>
             <View style={styles.conPrice}>    
               
               <View style={styles.btn}>
                <SimpleLineIcons color="#fff" fontSize={10} name="basket"/>
                <Text style={styles.btnText}>افزودن</Text>
               </View>
             </View>
           </View> 
         </Ripple>   
         }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    contItem:{
     marginTop:0,
     paddingHorizontal:15,
     paddingVertical:15,
     backgroundColor:"#fff",
     borderRadius:10,
     overflow:'hidden'
    },
    img:{
      width:150,
      height:150
    },
    eName:{
      fontSize:10,
      marginTop:10,
      color:'#aaa',
      textAlign:'left',
      width:'100%',
    },
    pName:{
      color:'black',
      fontFamily:'iNum',
      maxWidth:'100%',
      overflow:'hidden',
      fontSize:12
    },
    contcat:{
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      marginTop:5,
      borderRadius:5,
      justifyContent:'center',
      alignSelf:'flex-start',

    },
    cat:{
      marginLeft:5,
      fontFamily:'iLight',
      fontSize:12
    },
    conPrice:{
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      
    },
    conPrice1:{
      flex:1,
      alignItems:'center',
      flexDirection:'row',
    },
    price:{
      fontFamily:'iNum',
      color:'black'
    },
    price1:{
      marginLeft:5,
      fontFamily:'iLight',
      fontSize:10
    },
    btn:{
      backgroundColor:'#519259',
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
      paddingHorizontal:2,
      paddingVertical:4,
      marginTop:10
    },
    btnText:{
      color:'#fff',
      fontSize:11,
      fontFamily:'iReg',
      marginLeft:5
    },
    titAsl:{
      fontFamily:'iBold',
      color:'black',
      fontSize:17,

    },
    contTitAsl:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:20,
      marginTop:0,
      borderTopWidth:0.7,
      borderTopColor:'#eee',
      paddingTop:10
    },
    viewAll:{
      fontFamily:'iReg',
      fontSize:13,
      color:'#D06224'
    }
})

export default React.memo(Slider2)