import React, { Component } from 'react'

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { mobileWidth, mobileHeight, Font, Colors, localimag } from './Components/utils'
import Header from './Components/Header'
import HeaderWithBack from './Components/HeaderWithBack'
import { ImageBackground } from 'react-native'
export class StoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params.item
        }
    }

    componentDidMount() {
        console.log('item:this.props.route.params.item', this.props.route.params.item)
        this.setState({
            item: this.props.route.params.item
        })
    }
    render() {
        const item = this.state.item
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        flex: 1
                    }}
                    source={item.story_image}
                >
                    <View style={{
                        alignSelf: 'center',
                        padding: mobileWidth * 5 / 100,
                        justifyContent: 'space-between',
                        flexDirection: 'row', alignItems: 'center',
                        width: mobileWidth,
                        backgroundColor: "#00000010"


                    }}>
                        <View style={{

                            justifyContent: 'space-between',
                            flexDirection: 'row', alignItems: 'center',
                            width: mobileWidth * 70 / 100,

                        }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}

                            >
                                <Image
                                    style={{
                                        width: mobileWidth * 5 / 100,
                                        height: mobileWidth * 5 / 100,
                                        borderRadius: mobileWidth * 6 / 100,
                                    }}
                                    source={localimag.back}
                                >

                                </Image>
                            </TouchableOpacity>
                            <Image
                                style={{
                                    width: mobileWidth * 12 / 100,
                                    height: mobileWidth * 12 / 100,
                                    borderRadius: mobileWidth * 6 / 100,
                                }}
                                source={item.image}
                            >
                            </Image>
                            <View style={{ width: mobileWidth * 47 / 100 }}>
                                <Text style={{
                                    color: Colors.whitecolor,
                                    fontSize: mobileWidth * 3.8 / 100,
                                    fontFamily: Font.FontMedium
                                }}>{"Ranjeet Singh"}</Text>
                                <Text style={{
                                    color: Colors.whitecolor,

                                    fontSize: mobileWidth * 3.5 / 100,
                                    fontFamily: Font.FontRegular
                                }}>{"15-08-96"}</Text>
                            </View>

                        </View>
                        <Image
                            style={{
                                tintColor: Colors.whitecolor,
                                width: mobileWidth * 4 / 100,
                                height: mobileWidth * 5 / 100,
                            }}
                            source={localimag.more}
                        >
                        </Image>

                    </View>
                    <Image
                        style={{
                            marginVertical: mobileHeight * 2 / 100,
                            borderRadius: mobileWidth * 2 / 100,
                            width: mobileWidth,
                            height: mobileHeight,

                        }}
                        source={item.post_photo}
                    >
                    </Image>




                </ImageBackground>
            </View>
        )
    }
}

export default StoryDetails


const myStyle = StyleSheet.create(
    {
        img: {
            marginVertical: mobileHeight * 1 / 100,
            borderRadius: mobileWidth * 2 / 100,
            width: mobileWidth * 5 / 100,
            height: mobileWidth * 5 / 100,
            tintColor: Colors.themecolor
        },
        txt: {
            marginLeft: mobileWidth * 2 / 100,
            color: Colors.themecolor,
            lineHeight: mobileHeight * 3 / 100,
            fontSize: mobileWidth * 3.5 / 100,
            fontFamily: Font.FontRegular
        }
    }
)