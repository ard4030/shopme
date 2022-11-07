import React,{useRef, useState} from 'react'
import { Animated, StyleSheet, Text, View , UIManager , Platform , LayoutAnimation } from 'react-native'
import Ripple from 'react-native-material-ripple'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { testDest } from '../../Data/data';
import VizhAsl from './VizhAsl';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
let anima = { 
    duration: 700,
    create: { type: 'linear', property: 'opacity' },
    update: { type: 'spring', springDamping: 0.4 },
    delete: { type: 'linear', property: 'opacity' } 
}  

const TextDetail = () => {

    const [heightText, setHeightText] = useState(false);

    const changeView = () => {
        LayoutAnimation.configureNext(anima);
        setHeightText(!heightText)
    }


  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <View>
                <Text style={styles.name}>ردمی نوت 8</Text>
                <Text style={styles.e_name}>Redmi Note8 64g ram 153g ssd for</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.price1}>10.000.000</Text>
                <Text style={styles.price2}>تومان</Text>
            </View>
        </View>
        <View style={[styles.desc]}>
            <Text style={[styles.descText,{height:(heightText) ? 'auto' : 76}]}>
                {testDest}
            </Text>
            <Ripple style={{alignSelf:'flex-start',flexDirection:'row',alignItems:'center'}} onPress={changeView}>
                <Text style={styles.other}>
                    {(heightText) ? 'بستن' : 'بیشتر'}
                </Text>
                <AntDesign color={'#0081b9'} size={11} name={'left'}/>
            </Ripple>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    head:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        paddingTop:15,
        backgroundColor:'#fff',
    },
    price:{
        flexDirection:'row',
        alignItems:'center',
    },
    price1:{
        fontFamily:'iNum',
        fontSize:17,
        color:'green'
    },
    price2:{
        fontFamily:'iNum',
        fontSize:9,
        marginLeft:5
        
    },
    name:{
        flex:1,
        fontFamily:'iNum',
        color:'#000',
        fontSize:15
    },
    descText:{
        backgroundColor:'#fff',
        padding:10,
        fontFamily:'iNum',
        fontSize:10,
        overflow:'hidden',
        
    },
    desc:{
        marginTop:-1,
        flex:1,
    },
    other:{
        marginLeft:10,
        fontFamily:'iReg',
        alignSelf:'flex-start',
        textAlign:'center',
        justifyContent:'center',
        fontSize:13,
        marginTop:-8,
        paddingHorizontal:6,
        paddingVertical:3,
        borderRadius:5,
        color:'#0081b9',
        position:'relative',
        top:2
        
    },
    e_name:{
        fontSize:10
    }


})

export default React.memo(TextDetail)