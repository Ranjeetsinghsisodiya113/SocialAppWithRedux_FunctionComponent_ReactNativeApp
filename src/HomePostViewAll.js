import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Modal } from 'react-native';
import { mobileWidth, mobileHeight, Font, Colors, localimag } from './Components/utils';
import HeaderWithBack from './Components/HeaderWithBack';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from './redux/actions';
const HomeHomePostViewAll = ({ navigation }) => {
    const dispatch = useDispatch();
    var postList = useSelector(state =>state.reducers);
    const [isOptions, setIsOptions] = useState(false);
    const [postId, setPostId] = useState(false);
    const [myItem, setMyItem] = useState(null);

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isOptions}
                onRequestClose={() => {
                   setIsOptions(false)
                }}>

                <View style={{ flex: 1, backgroundColor: '#00000030', alignItems: 'center' }}>
                    <View style={{ position: 'absolute', bottom: 25, width: mobileWidth, }}>
                        <View style={{ backgroundColor: Colors.whitecolor, borderRadius: 15, width: '94%', paddingVertical: mobileWidth * 3.3 / 100, alignSelf: 'center' }}>
                            <View
                            >
                                <Text style={{ color: Colors.blackcolor
                                    , fontSize: mobileWidth * 4 / 100, alignSelf: 'center', fontFamily: Font.FontMedium }}>{"Select Option"}</Text>
                            </View>
                            <View style={{ borderBottomColor: Colors.graycolor, borderBottomWidth: 1, marginTop: 11, marginHorizontal: 50 }}></View>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log(myItem)
                                    setIsOptions(false)
                                    navigation.navigate('EditPost', { item: myItem })
                                    }}
                            >
                                <Text style={{ color: Colors.themecolor, fontSize: mobileWidth * 4 / 100, alignSelf: 'center', fontFamily: Font.FontRegular, marginTop: 10, }}>{"Edit"}</Text>
                            </TouchableOpacity>
                            <View style={{ borderRadius: mobileWidth * 5 / 100, borderBottomColor: Colors.gray_color, borderBottomWidth: 1, marginTop: 10, marginHorizontal: 50 }}></View>
                            <TouchableOpacity
                                onPress={() => {
                                     dispatch(deletePost(postId))
                                     setIsOptions(false)
                                     
                                  }}
                            >
                                <Text style={{ color: Colors.themecolor, fontSize: mobileWidth * 4 / 100, alignSelf: 'center', fontFamily: Font.FontRegular, marginTop: 10, }}>{"Delete"}</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 15, alignSelf: 'center', borderRadius: 15, backgroundColor: Colors.whitecolor, width: '94%', justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => { setIsOptions(false)  }} style={{ alignSelf: 'center', width: '94%', alignItems: 'center', justifyContent: 'center', paddingVertical: mobileWidth * 3.5 / 100 }}>
                                <Text style={{ fontFamily: Font.FontMedium, fontSize: mobileWidth * 4 / 100, color: 'red' }}>{"Cancel"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
            <HeaderWithBack title={"POSTS"} navigation={navigation} />
            <View style={{ height: mobileHeight * 90 / 100, justifyContent: 'center' }}>
                {
                    postList!='NA' && postList!=null &&
                
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: mobileHeight * 2 / 100 }} />}
                    contentContainerStyle={{ paddingTop: mobileHeight * 2 / 100, paddingBottom: mobileHeight * 10 / 100 }}
                    data={postList}
                    renderItem={({ item, index }) =>
                    <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                       navigation.navigate('PostDetails', { item: item })
                    }}
                    style={{
                        borderRadius: mobileWidth * 2 / 100,
                        shadowColor: Colors.blackcolor,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,


                        elevation: 4,
                        backgroundColor: Colors.whitecolor,
                        width: mobileWidth * 90 / 100,
                        alignSelf: 'center',
                        padding: mobileWidth * 3 / 100
                    }}>
                    <View style={{

                        justifyContent: 'space-between',
                        flexDirection: 'row', alignItems: 'center',
                        width: mobileWidth * 84 / 100,


                    }}>
                        <View style={{

                            justifyContent: 'space-between',
                            flexDirection: 'row', alignItems: 'center',
                            width: mobileWidth * 62 / 100,


                        }}>
                            <Image
                                style={{
                                    borderRadius:mobileWidth*6/100,
                                    width: mobileWidth * 12 / 100,
                                    height: mobileWidth * 12 / 100,
                                }}
                                source={localimag.user_1}
                            >
                            </Image>
                            <View style={{ width: mobileWidth * 47 / 100 }}>
                                <Text style={{
                                    color: Colors.blackcolor,
                                    fontSize: mobileWidth * 3.8 / 100,
                                    fontFamily: Font.FontMedium
                                }}>{"Ranjeet Singh"}</Text>
                                <Text style={{
                                    color: Colors.blackcolor,

                                    fontSize: mobileWidth * 3.5 / 100,
                                    fontFamily: Font.FontRegular
                                }}>{"15-08-96"}</Text>
                            </View>

                        </View>
                        <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={()=>{

                            setPostId(item.post_id)
                            setMyItem(item)

                            setTimeout(() => {
                                setIsOptions(true) 
                            }, 300);
                            
                        }}
                        
                        >
                        <Image
                            style={{
                                tintColor: Colors.themecolor,
                                width: mobileWidth * 4 / 100,
                                height: mobileWidth * 5 / 100,
                            }}
                            source={localimag.more}
                        >
                        </Image>
                        </TouchableOpacity>

                    </View>

                    <Text style={{
                        marginTop: mobileHeight * 2 / 100,
                        lineHeight: mobileHeight * 3 / 100,
                        color: Colors.blackcolor,
                        fontSize: mobileWidth * 3.5 / 100,
                        fontFamily: Font.FontMedium
                    }}>{item.title}</Text>
                    <Text style={{
                        color: Colors.blackcolor,
                        lineHeight: mobileHeight * 3 / 100,
                        fontSize: mobileWidth * 3.5 / 100,
                        fontFamily: Font.FontMedium
                    }}>{item.description}</Text>

                    <Image
                        style={{
                            marginVertical: mobileHeight * 2 / 100,
                            borderRadius: mobileWidth * 2 / 100,
                            width: mobileWidth * 84 / 100,
                            height: mobileWidth * 65 / 100,
                            backgroundColor: Colors.themecolor
                        }}
                        source={{uri:item.post_photo}}
                    >
                    </Image>

                    <View style={{
                        borderTopColor: Colors.themecolor,
                        borderTopWidth: mobileWidth * 0.2 / 100,
                        borderBottomColor: Colors.themecolor,
                        borderBottomWidth: mobileWidth * 0.2 / 100,
                        justifyContent: 'space-between',
                        flexDirection: 'row', alignItems: 'center',
                        width: mobileWidth * 84 / 100,


                    }}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            width: mobileWidth * 20 / 100,
                        }}>
                            <Image
                                style={myStyle.img}
                                source={localimag.like_icon}
                            >
                            </Image>

                            <Text style={myStyle.txt}>{"Like"}</Text>


                        </View>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            width: mobileWidth * 24 / 100,
                        }}>
                            <Image
                                style={myStyle.img}
                                source={localimag.black_comment_icon}
                            >
                            </Image>

                            <Text style={myStyle.txt}>{"Comment"}</Text>


                        </View>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            width: mobileWidth * 20 / 100,
                        }}>
                            <Image
                                style={myStyle.img}
                                source={localimag.share_icon}
                            >
                            </Image>

                            <Text style={myStyle.txt}>{"Share"}</Text>


                        </View>

                    </View>




                </TouchableOpacity>
                    }
                />
}
            </View>
        </View>
    );
};

export default HomeHomePostViewAll;

const myStyle = StyleSheet.create({
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
});
