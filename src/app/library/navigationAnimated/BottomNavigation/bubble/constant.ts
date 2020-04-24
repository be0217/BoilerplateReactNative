import  Animated, { Easing }  from 'react-native-reanimated';
const DEFAULT_ITEM_ANIMATION_EASING:Animated.EasingFunction = Easing.out(Easing.exp)

const DEFAULT_ITEM_ANIMATION_DURATION:number = 500;
const DEFAULT_ITEM_INNER_SPACE:number  = 15;
const DEFAULT_ITEM_OUTER_SPACE:number  = 12;
const DEFAULT_ITEM_ICON_SIZE = 24;
const DEFAULT_ITEM_LAYOUT_DIRECTION:boolean =false;

export{
    DEFAULT_ITEM_ANIMATION_EASING,
    DEFAULT_ITEM_ANIMATION_DURATION,
    DEFAULT_ITEM_INNER_SPACE,
    DEFAULT_ITEM_OUTER_SPACE,
    DEFAULT_ITEM_ICON_SIZE,
    DEFAULT_ITEM_LAYOUT_DIRECTION
}