import React from 'react'
import { View , Text, ScrollView, StyleSheet  } from 'react-native'
import Header from '../Components/Header/Header'
import Slider1 from '../Components/Main/Slider1'
import Offers1 from '../Components/Main/Offers1'
import Slider2 from '../Components/Main/Slider2'
import {fames, slider2, tlev} from '../Data/data'
import Offers2 from '../Components/Main/Offers2'
import Category from '../Components/Main/Category'
import StatusBar1 from '../Components/Header/StatusBar'

const Main = () => {
  return (
    <ScrollView style={styles.body}>
      <StatusBar1 />
      <Header name={"Main"}/>
      <Slider1 />
      <Category />
      <Offers1 />
      <Slider2 title={'جدید ترین ها'} data={slider2}/>
      <Slider2 title={'محبوب ترین ها'} data={fames}/>
      <Offers2 />
      <Slider2 title={'کالای ایرانی'} data={tlev}/>

    </ScrollView>
  )
}



const styles = StyleSheet.create({
  body:{
    backgroundColor:'#fff'
  }
})

export default React.memo(Main)