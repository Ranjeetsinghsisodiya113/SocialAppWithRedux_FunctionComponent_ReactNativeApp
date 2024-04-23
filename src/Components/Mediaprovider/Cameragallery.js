import React, { Component } from "react"
import {
    View, 
    Dimensions,
    Modal,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Text,
    SafeAreaView,
} from "react-native"
import { Colors, Font, mobileWidth } from '../utils';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);


export default class Cameragallery extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.mediamodal}
                onRequestClose={() => {
                    this.setState({ modalVisible: false })
                }}>

                <View style={{ flex: 1, backgroundColor: '#00000030', alignItems: 'center' }}>
                    <View style={{ position: 'absolute', bottom: 25, width: screenWidth, }}>
                        <View style={{ backgroundColor: Colors.whitecolor, borderRadius: 15, width: '94%', paddingVertical: mobileWidth * 3.3 / 100, alignSelf: 'center' }}>
                            <View
                            >
                                <Text style={{ color: Colors.blackcolor
                                    , fontSize: screenWidth * 4 / 100, alignSelf: 'center', fontFamily: Font.FontMedium }}>{"Select Option"}</Text>
                            </View>
                            <View style={{ borderBottomColor: Colors.graycolor, borderBottomWidth: 1, marginTop: 11, marginHorizontal: 50 }}></View>
                            <TouchableOpacity
                                onPress={() => { this.props.Camerapopen() }}
                            >
                                <Text style={{ color: Colors.themecolor, fontSize: screenWidth * 4 / 100, alignSelf: 'center', fontFamily: Font.FontRegular, marginTop: 10, }}>{"Camera"}</Text>
                            </TouchableOpacity>
                            <View style={{ borderRadius: mobileWidth * 5 / 100, borderBottomColor: Colors.gray_color, borderBottomWidth: 1, marginTop: 10, marginHorizontal: 50 }}></View>
                            <TouchableOpacity
                                onPress={() => { this.props.Galleryopen() }}
                            >
                                <Text style={{ color: Colors.themecolor, fontSize: screenWidth * 4 / 100, alignSelf: 'center', fontFamily: Font.FontRegular, marginTop: 10, }}>{"Gellary"}</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 15, alignSelf: 'center', borderRadius: 15, backgroundColor: Colors.whitecolor, width: '94%', justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => { this.props.Canclemedia() }} style={{ alignSelf: 'center', width: '94%', alignItems: 'center', justifyContent: 'center', paddingVertical: screenWidth * 3.5 / 100 }}>
                                <Text style={{ fontFamily: Font.FontMedium, fontSize: screenWidth * 4 / 100, color: 'red' }}>{"Cancel"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "center",
        backgroundColor: '#00000040',
        top: 0, left: 0, bottom: 0, right: 0
    },

    activityIndicatorWrapper: {
        height: 80,
        width: 80,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 6,
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "center",
    }
})
