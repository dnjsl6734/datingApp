import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const basicDimensions = {
    width: 360,
    height: 800,
};

const width = (basicwidth) => {
    const percentage = (basicwidth / basicDimensions.width) * 100;
    return responsiveScreenWidth(percentage);
};

const height = (basicheight) => {
    const percentage = (basicheight / basicDimensions.height) * 100;
    return responsiveScreenHeight(percentage);
};

const fontSize = (basicsize) => {
    const percentage = basicsize * 0.135;
    return responsiveScreenHeight(percentage);
};

// theme 객체에 감싸서 반환한다.
const Theme = {
    fontSize,
    height,
    width,
};

export default Theme;