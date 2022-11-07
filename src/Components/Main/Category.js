import React from 'react'
import { FlatList, Image, StyleSheet, View , Text} from 'react-native'
import Ripple from 'react-native-material-ripple'
import { categoryList } from '../../Data/data'

const Category = () => {
  return (
    <View style={styles.container}>
        <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({item,index}) => 
            <Ripple style={styles.content}>
                <Image style={styles.img} source={{uri:item.img}}/>
                <Text style={styles.name}>{item.name}</Text>
            </Ripple>
        }   
        />
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:70,
        height:70
    },
    name:{
        width:'100%',
        textAlign:'center',
        fontFamily:'iReg'
    },
    container:{
        paddingVertical:15,
        paddingHorizontal:15
    },
    content:{
        marginRight:15,
    }
})

export default React.memo(Category)