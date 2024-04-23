import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { mobileWidth, mobileHeight, Font, Colors, localimag } from './utils'
const Header = (props) => {
    const title = props.title
   
    const navigation = props.navigation
    return (
        <View style={{
            width: mobileWidth,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.themecolor,
            height: mobileHeight * 8 / 100,
            paddingHorizontal: mobileWidth * 3 / 100,
            justifyContent: 'space-between'
        }}>
            <Text style={{
                color: Colors.whitecolor,
                textAlign: "center",
                fontSize: mobileWidth * 5 / 100,
                fontFamily: Font.FontSemiBoldItalic
            }}>{title}</Text>
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{
             navigation.navigate('AddPost'); 

            }}
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image style={{
                    tintColor: Colors.whitecolor,
                    width: mobileWidth * 5 / 100,
                    height: mobileWidth * 5 / 100,
                    marginRight:mobileWidth*1/100
                }}
                    source={localimag.add_btn}

                >

                </Image>
                <Text style={{
                    color: Colors.whitecolor,
                    textAlign: "center",
                    fontSize: mobileWidth * 4 / 100,
                    fontFamily: Font.FontSemiBoldItalic
                }}>{"Create Post"}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Header