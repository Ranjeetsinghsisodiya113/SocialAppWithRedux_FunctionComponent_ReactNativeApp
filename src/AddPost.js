

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard } from 'react-native';
import { Cameragallery, mediaprovider, mobileWidth, mobileHeight, Font, Colors, localimag } from './Components/utils';
import HeaderWithBack from './Components/HeaderWithBack';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddPost = ({ navigation }) => {
    var postList = useSelector(state => state.reducers);

    const [mediamodal, setMediamodal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [postPhoto, setPostPhoto] = useState('NA');

    const dispatch = useDispatch();

    const Camerapopen = async () => {
        mediaprovider.launchCamera(true).then((res) => {
            console.log('camerares', res)

            setMediamodal(false);
            setPostPhoto(res.path);

        }).catch((error) => {
            setMediamodal(false);
            consolepro.consolelog(' camera error ', error);
            if (config.device_type == 'ios') {
                if (error == 'Error: User did not grant camera permission.') {
                    consolepro.consolelog('i am here ');
                    setTimeout(() => {
                        this.open_settings();
                    }, 1000);
                }
            } else {
                if (error == 'Error: User did not grant camera permission.') {
                    this.open_settings();
                }
            }

        })
    }

    //----------------------------function for open setting of this app in device for permission----------------

    const open_settings = () => {

        Alert.alert("Alert", 'This app need permissions,Please allow it', [
            {
                text: 'Close',
                onPress: () => { consolepro.consolelog('nothing user cancle it ') },
                style: "cancel"
            },
            { text: 'Open Settings', onPress: () => { Linking.openSettings(); } }
        ], { cancelable: false });
    }

    //-----------------------------function to access images from gallery

    const Galleryopen = () => {
        mediaprovider.launchGellery(true,).then((res) => {
            console.log('camerares', res)


            setMediamodal(false);
            setPostPhoto(res.path);
        }).catch((error) => {
            setMediamodal(false);
            consolepro.consolelog('gallery error', error);
            if (config.device_type == 'ios') {
                if (error == 'Error: Cannot access images. Please allow access if you want to be able to select images.') {
                    consolepro.consolelog('i am here ')
                    setTimeout(() => {
                        this.open_settings();
                    }, 1000);
                }
            }
            else {
                if (error == 'Error: Required permission missing') {
                    this.open_settings();
                }
            }
        })
    }




    const AddPostFunc = () => {


        console.log('post list', postList)

        var post_id = 1;
        if (postList.length) {
            post_id = postList[postList.length - 1].post_id + 1

        }
        var data = {
            post_id: post_id,
            title: title,
            description: description,
            post_photo: postPhoto
        }

        console.log('data', data)



        dispatch(addPost(data))
        navigation.goBack()

    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <HeaderWithBack title={"Create Post"} navigation={navigation} />
            <Cameragallery
                mediamodal={mediamodal}
                Camerapopen={() => { Camerapopen() }}
                Galleryopen={() => { Galleryopen() }}
                Canclemedia={() => { setMediamodal(false) }}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', width: mobileWidth, }} keyboardShouldPersistTaps='handled'>

                <TextInput
                    style={{
                        borderRadius: mobileWidth * 2 / 100,
                        paddingHorizontal: mobileWidth * 2 / 100,
                        backgroundColor: Colors.themecolor,
                        width: mobileWidth * 90 / 100,
                        color: Colors.whitecolor,
                        lineHeight: mobileHeight * 3 / 100,
                        fontSize: mobileWidth * 3.5 / 100,
                        fontFamily: Font.FontMedium,
                        marginVertical: mobileHeight * 1 / 100
                    }}
                    onChangeText={(txt) => {
                        setTitle(txt)
                    }}
                    onBlur={() => {
                        Keyboard.dismiss()
                    }}
                    placeholder='title'
                    placeholderTextColor={Colors.graycolor}
                //value={description}
                ></TextInput>
                <TextInput
                    multiline={true}
                    style={{
                        borderRadius: mobileWidth * 2 / 100,
                        paddingHorizontal: mobileWidth * 2 / 100,
                        backgroundColor: Colors.themecolor,
                        width: mobileWidth * 90 / 100,
                        color: Colors.whitecolor,
                        lineHeight: mobileHeight * 3 / 100,
                        fontSize: mobileWidth * 3.5 / 100,
                        fontFamily: Font.FontMedium
                    }}
                    onChangeText={(txt) => {
                        setDescription(txt)
                    }}
                    onBlur={() => {
                        Keyboard.dismiss()
                    }}
                    placeholder='description'
                    placeholderTextColor={Colors.graycolor}
                    maxLength={250}
                //value={description}
                ></TextInput>

                {
                    postPhoto == "NA" ?

                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setMediamodal(true)
                            }}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: mobileHeight * 2 / 100,
                                borderRadius: mobileWidth * 2 / 100,
                                width: mobileWidth * 90 / 100,
                                height: mobileWidth * 65 / 100,
                                backgroundColor: Colors.themecolor
                            }}

                        >
                            <Image
                                style={{
                                    marginVertical: mobileHeight * 2 / 100,
                                    borderRadius: mobileWidth * 2 / 100,
                                    width: mobileWidth * 20 / 100,
                                    height: mobileWidth * 20 / 100,

                                }}
                                source={localimag.add_btn}
                            >
                            </Image>

                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setMediamodal(true)
                            }}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: mobileHeight * 2 / 100,
                                borderRadius: mobileWidth * 2 / 100,
                                width: mobileWidth * 90 / 100,
                                height: mobileWidth * 65 / 100,
                                backgroundColor: Colors.themecolor
                            }}

                        >
                            <Image
                                style={{
                                    marginVertical: mobileHeight * 2 / 100,
                                    borderRadius: mobileWidth * 2 / 100,
                                    width: mobileWidth * 90 / 100,
                                    height: mobileWidth * 65 / 100,
                                    backgroundColor: Colors.themecolor
                                }}
                                source={{ uri: postPhoto }}
                            >
                            </Image>
                        </TouchableOpacity>




                }

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        AddPostFunc()
                    }}

                    style={{
                        marginTop: mobileHeight * 2 / 100,
                        alignSelf: 'center',
                        width: mobileWidth * 90 / 100,
                        backgroundColor: Colors.themecolor,
                        height: mobileHeight * 7 / 100
                        , justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: mobileHeight * 3.5 / 100,
                    }}>

                    <Text style={{

                        color: Colors.whitecolor,
                        textAlign: 'center',
                        fontSize: mobileWidth * 4.2 / 100,
                        fontFamily: Font.FontSemiBoldItalic
                    }}>{"Create Post"}</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    );
};

export default AddPost;

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
