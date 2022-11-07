import React from 'react'
import { View , Text, ScrollView} from 'react-native'
import Header from '../Components/Header/Header'
import StatusBar1 from '../Components/Header/StatusBar'
import Colors from '../Components/Product/Colors'
import Slider from '../Components/Product/Slider'
import TextDetail from '../Components/Product/TextDetail'
import VizhAsl from '../Components/Product/VizhAsl'
import Vizhegi from '../Components/Product/Vizhegi'
import { productData, vizhegiProd } from '../Data/data'


const Product = () => {
  return (
    <ScrollView style={{backgroundColor:'#eee'}}>
        <StatusBar1 />

        <View style={{backgroundColor:'#fff',paddingBottom:10}}>
          <Header name={'Product'}/>
          <Slider />
          <TextDetail />
        </View>
 
        {/* <View style={{backgroundColor:'#fff',paddingBottom:10,marginBottom:10}}>
          <Colors colors={productData.colors}/>
          {vizhegiProd.map((item,index) =>
            <Vizhegi key={index} vizh={item}/>
          )}
        </View> */}
        

        
    </ScrollView>
  )
}

export default React.memo(Product)