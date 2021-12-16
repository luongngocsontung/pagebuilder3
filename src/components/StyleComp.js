import Color from "./Edit/Overall/Color";
import Padding from "./Edit/Spacing/Padding";
import Margin from "./Edit/Spacing/Margin";
import FontSize from "./Edit/Typography/FontSize";
import TextAlign from "./Edit/Typography/TextAlign";
import BackgroundColor from "./Edit/Background/BackgroundColor";

const StyleComp = [
    {
        name: 'Overall',
        Comp: [Color]
    },
    {
        name: 'Spacing',
        Comp: [Padding, Margin]
    },
    {
        name: 'Typography',
        Comp: [FontSize, TextAlign]
    },
    {
        name: 'Background',
        Comp: [BackgroundColor]
    },
]

export default StyleComp;