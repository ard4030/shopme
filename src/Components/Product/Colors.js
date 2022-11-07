import React,{ useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'

const Colors = ({colors}) => {

    const [defColor, setdefColor] = useState(colors[0].name)
    
    const changeColor = (name,e) => {
        setdefColor(name)
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>رنگ ها</Text>
        <View style={styles.box_colors}>

            {colors.map((item,index) => 
            <Ripple onPress={changeColor.bind(this,item.name)} key={index} style={[styles.colorItem,{backgroundColor:item.value}]}>
                <View style={(item.name == defColor) ? styles.colorActive : ''}></View>
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
        width:20,
        height:20,
        borderRadius:100,
        marginLeft:15,
        position:'relative'
        
    },
    colorActive:{
        position:'absolute',
        top:-4,
        left:-4,
        width:'140%',
        height:'140%',
        backgroundColor:'transparent',
        borderRadius:100,
        borderColor:'green',
        borderWidth:2
    }
})

export default React.memo(Colors)