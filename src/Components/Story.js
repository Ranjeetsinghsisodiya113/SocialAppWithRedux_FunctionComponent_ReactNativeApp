import React, { Component, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Font, mobileHeight, mobileWidth, Colors } from './utils'
export const Story = (props) => {

    const userStory = props.userStory
    const navigation = props.navigation
    console.log(userStory)
    return (
        <View style={{
            borderBottomLeftRadius: mobileWidth * 5 / 100,
            borderBottomRightRadius: mobileWidth * 5 / 100,
            backgroundColor: Colors.themecolor,
            height: mobileHeight * 13 / 100, width: mobileWidth,

        }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ padding: mobileWidth * 3 / 100 }}
                horizontal={true}
                data={userStory}

                renderItem={({ item, index }) =>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {

                            navigation.navigate("StoryDetails", { item: item })

                        }}
                        style={{ marginRight: mobileWidth * 4 / 100 }}>
                        <Image
                            resizeMode='cover'
                            style={{
                                borderColor: Colors.whitecolor,
                                borderWidth:mobileWidth*0.4/100,
                                borderRadius: mobileWidth * 7.5 / 100,
                                width: mobileWidth * 15 / 100,
                                height: mobileWidth * 15 / 100
                            }}
                            source={item.image}
                        >

                        </Image>
                        <Text
                            numberOfLines={1}
                            style={{
                                width: mobileWidth * 15 / 100,
                                color: Colors.whitecolor,
                                textAlign: 'center',
                                fontSize: mobileWidth * 2.8 / 100,
                                fontFamily: Font.FontMediumItalic
                            }}

                        >
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                }
            >

            </FlatList>

        </View>
    )

}

export default Story