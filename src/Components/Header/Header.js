import React from 'react'
import { View , Text, StyleSheet, Image } from 'react-native';
import menu from '../../Images/menu.png'
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import { styles } from 'react-native-material-ripple/styles';
import Ripple from 'react-native-material-ripple';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



const Header = ({name}) => {

    
    const mainHeader = () => {

        const mainStyle = StyleSheet.create({
            mainBody:{
                backgroundColor:'#fff',
                height:60,
                flex:1,
                flexDirection:'row',
                paddingLeft:15,
                paddingRight:15,
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:25,
                            },
            title:{
                fontFamily:'iBold',
                fontSize:20,
                color:'black'
            },
            img:{
                width:30,
                height:30,
                // transform: [{ rotate: '180deg'}]
            },
            bas:{
                position:'relative'
            },
            badge:{
                position:'absolute',
                width:15,
                height:15,
                backgroundColor:'#f50057',
                top:-4,
                left:-2,
                zIndex:2,
                borderRadius:100,
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center',
                color:'#fff',
                fontSize:10
            }
        })

        return(
        <View style={mainStyle.mainBody}>
            <Ripple style={mainStyle.bas}>
                <SimpleLineIcons size={25} color={'black'} name={'basket'}/>
                <Text style={mainStyle.badge}>1</Text>
            </Ripple>
            <Text style={mainStyle.title}>شاپ مارکت</Text>
            <Image style={mainStyle.img} source={menu}/>
        </View>
        )
    }

    const productHeader = () => {

        const mainStyle = StyleSheet.create({
            mainBody:{
                backgroundColor:'#fff',
                height:60,
                flex:1,
                flexDirection:'row',
                paddingLeft:15,
                paddingRight:15,
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:25,
                },
            title:{
                fontFamily:'iBold',
                fontSize:20,
                color:'black'
            },
            img:{
                width:30,
                height:30,
                // transform: [{ rotate: '180deg'}]
            },
            bas:{
                position:'relative'
            },
            badge:{
                position:'absolute',
                width:15,
                height:15,
                backgroundColor:'#f50057',
                top:-4,
                left:-2,
                zIndex:2,
                borderRadius:100,
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center',
                color:'#fff',
                fontSize:10
            }
        })

        return(
        <View style={mainStyle.mainBody}>
            <Ripple style={mainStyle.bas}>
                <SimpleLineIcons size={25} color={'black'} name={'basket'}/>
                <Text style={mainStyle.badge}>1</Text>
            </Ripple>
            <Text style={mainStyle.title}>شاپ مارکت</Text>
            {/* <Image style={mainStyle.img} source={menu}/> */}
            <Ripple><AntDesign size={25} color={'black'} name={'arrowleft'}/></Ripple>
        </View>
        )
    }

    switch (name) {
        case 'Main':
            return mainHeader()
            break;
        case 'Product':
            return productHeader()
            break;   
    }

}

export default React.memo(Header)