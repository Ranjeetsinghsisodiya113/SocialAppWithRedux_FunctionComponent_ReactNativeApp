import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { mobileWidth,mobileHeight,Font,Colors, localimag } from './utils'
const HeaderWithBack=(props)=>{
        
         const title=props.title
         const navigation=props.navigation
       
  
    return (
        <View style={{
          borderBottomLeftRadius:mobileWidth*5/100,
          borderBottomRightRadius:mobileWidth*5/100,
            flexDirection:'row',
            width:mobileWidth,
            paddingHorizontal:mobileWidth*4/100,
            backgroundColor:Colors.themecolor, 
           height:mobileHeight*7/100,
           alignItems:'center',
          
           justifyContent:'space-between'
          }}>
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{
              navigation.goBack()
            }}
            >

           
            <Image
            style={{
                width:mobileWidth*5/100,
                height:mobileWidth*5/100,
            }}
            source={localimag.back}
            >

            </Image>
            </TouchableOpacity>
          <Text style={{
            color:Colors.whitecolor,
            textAlign:'center',
            fontSize:mobileWidth*5/100,
            fontFamily:Font.FontSemiBoldItalic
            }}>{title}</Text>

            <View 
             style={{
                width:mobileWidth*4/100,
             }}
            >

            </View>
             </View>
    )
 
}

export default HeaderWithBack