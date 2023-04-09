//used constants for better future debugging
const COLORS = { 
    primary: '#9499ff',
    secondary: '#E9E9E9',
    accent: '#ffc7c8',
    tertiary: '#000',
    placeholder: 'gray'
}

const SIZES = {
    padding: 19,
    borderRadius: 15,
    textBoxRadius: 25,
    h1: 24,
    h2: 20
}

const FONTS = {
    h1_semiBold: {fontSize: SIZES.h1, fontFamily: 'Montserrat_Semibold'},
    h2_semiBold: {fontSize: SIZES.h2, fontFamily: 'Montserrat_Semibold'}
}

const SHADOW = {
    elevation: 5,
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 2, height: 12},
    shadowRadius: 12,
}

export {COLORS, SIZES, FONTS, SHADOW}