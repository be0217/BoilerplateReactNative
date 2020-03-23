import { FontSize } from './../config/type';
import React from 'react';
import { PixelRatio } from 'react-native';
const pixel = PixelRatio.get();
export const FontSizeDefault: FontSize = {
    FONT_4: pixel <= 2 ? 4 : 6,
    FONT_5: pixel <= 2 ? 5 : 7,
    FONT_6: pixel <= 2 ? 6 : 8,
    FONT_7: pixel <= 2 ? 7 : 9,
    FONT_8: pixel <= 2 ? 8 : 10,
    FONT_9: pixel <= 2 ? 9 : 11,
    FONT_10: pixel <= 2 ? 10 : 12,
    FONT_11: pixel <= 2 ? 11 : 13,
    FONT_12: pixel <= 2 ? 12 : 14,
    FONT_13: pixel <= 2 ? 13 : 15,
    FONT_14: pixel <= 2 ? 14 : 16,
    FONT_15: pixel <= 2 ? 15 : 17,
    FONT_16: pixel <= 2 ? 16 : 18,
    FONT_17: pixel <= 2 ? 17 : 19,
    FONT_18: pixel <= 2 ? 18 : 20,
    FONT_19: pixel <= 2 ? 19 : 21,
    FONT_20: pixel <= 2 ? 20 : 22,
    FONT_21: pixel <= 2 ? 21 : 23,
    FONT_22: pixel <= 2 ? 22 : 24,
    FONT_23: pixel <= 2 ? 23 : 25,
    FONT_24: pixel <= 2 ? 24 : 26,
    FONT_25: pixel <= 2 ? 25 : 27,
    FONT_26: pixel <= 2 ? 26 : 28,
    FONT_27: pixel <= 2 ? 27 : 29,
    FONT_28: pixel <= 2 ? 28 : 30,
    FONT_29: pixel <= 2 ? 29 : 31,
    FONT_30: pixel <= 2 ? 30 : 32,
    FONT_31: pixel <= 2 ? 31 : 33,
    FONT_32: pixel <= 2 ? 32 : 34,
}
