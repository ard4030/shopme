import React,{ useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'

const Vizhegi = ({vizh}) => {
    const [defActive, setdefActive] = useState(vizh.items[0].name)
    
    const changeColor = (name,e) => {
        setdefActive(name)
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{vizh.name}</Text>
        <View style={styles.box_colors}>

            {vizh.items.map((item,index) => 
            <Ripple onPress={changeColor.bind(this,item.name)} key={index} style={[styles.colorItem]}>
                <Text style={[(item.name == defActive) ? styles.colorActive : '',styles.naming]}>{item.name}</Text>
            </Ripple>
            )}
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignSelf:'center',
        paddingHorizontal:15,
        flexDirection:'row',
        width:'100%',
        marginTop:10,
        borderTopColor:'#eee',
        borderTopWidth:0.2,
        paddingTop:10,
        paddingBottom:1
    },
    title:{
        fontFamily:'iReg',
        fontSize:15,
        color:'#000',
        
    },
    box_colors:{
        flexDirection:'row',
        alignItems:'center',
 
    },
    colorItem:{
        borderRadius:100,
        marginLeft:15,
        position:'relative'
        
    },
    colorActive:{
        borderWidth:2,
        borderColor:'#1a237e',
        borderRadius:5,
        color:'#1a237e',
        backgroundColor:'#e8eaf6'
    },
    naming:{
        padding:3,
        fontFamily:'iNum',
        borderWidth:2,
        borderColor:'transparent',
        fontSize:12,
        textAlign:'center',
        paddingBottom:2
    }

})

export default React.memo(Vizhegi)