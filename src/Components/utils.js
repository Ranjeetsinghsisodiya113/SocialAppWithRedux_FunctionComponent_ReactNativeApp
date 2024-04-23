import {  Dimensions,  } from 'react-native';
const mobileHeight = Math.round(Dimensions.get('window').height);
const mobileWidth = Math.round(Dimensions.get('window').width);
import Cameragallery  from "./Mediaprovider/Cameragallery";
import {mediaprovider }from "./Mediaprovider/Mediaprovider";
import {Colors,Font} from './ColorFonts';
import{localimag} from './Localimage'
export {
    mediaprovider,
   Cameragallery,
    Font,
    Colors,
    mobileHeight,
    mobileWidth,
    localimag
}