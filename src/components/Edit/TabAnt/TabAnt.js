import { Collapse, Tabs } from "antd";
import { useSubscription } from "global-state-hook";
import getElement from "../../../controller/getElement";
import React from "react";
import Color from "../Overall/Color";
import Padding from '../Spacing/Padding'
import Margin from "../Spacing/Margin";
import FontSize from "../Typography/FontSize";
import TextAlign from "../Typography/TextAlign";
import BackgroundColor from "../Background/BackgroundColor";
const { TabPane } = Tabs;
const { Panel } = Collapse;


export default function TabAnt({ id }) {
    const { state, setState } = useSubscription(getElement(id))

    // Color
    const handleColorChange = e => {
        const newStyle = { ...state.style, color: e.target.value }
        setState({ style: newStyle });
    }

    //Padding
    const handlePaddingChange = e => {
        let value = e.target.value;
        let newStyle = null;
        if (!value.toString().length)
            value = 0;

        switch (e.target.id) {
            case 'paddingTop':
                newStyle = { ...state.style, paddingTop: value + 'px' }
                break;
            case 'paddingLeft':
                newStyle = { ...state.style, paddingLeft: value + 'px' }
                break;
            case 'paddingRight':
                newStyle = { ...state.style, paddingRight: value + 'px' }
                break;
            case 'paddingBottom':
                newStyle = { ...state.style, paddingBottom: value + 'px' }
                break;
            default:
                break;
        }
        setState({ style: newStyle });
    }

    //Margin
    const handleMarginChange = e => {
        let value = e.target.value;
        let newStyle = null;
        if (!value.toString().length)
            value = 0;

        switch (e.target.id) {
            case 'marginTop':
                newStyle = { ...state.style, marginTop: value + 'px' }
                break;
            case 'marginLeft':
                newStyle = { ...state.style, marginLeft: value + 'px' }
                break;
            case 'marginRight':
                newStyle = { ...state.style, marginRight: value + 'px' }
                break;
            case 'marginBottom':
                newStyle = { ...state.style, marginBottom: value + 'px' }
                break;
            default:
                break;
        }
        setState({ style: newStyle });
    }

    //Font Size
    const handleFontSizeChange = e => {
        const newStyle = { ...state.style, fontSize: e + 'px' };
        setState({ style: newStyle });
    }

    //Text Align
    const handleTextAlignChange = e => {
        const newStyle = { ...state.style, textAlign: e.target.id };
        setState({ style: newStyle });
    }

    //Background Color
    const handleBackgroundColorChange = e => {
        const newStyle = { ...state.style, backgroundColor: e.target.value };
        setState({ style: newStyle });
    }

    return (
        <Tabs centered defaultActiveKey="2">
            <TabPane tab="General" key='1'>

            </TabPane>

            <TabPane tab="Styling" key='2'>
                <Collapse defaultActiveKey={['1', '2', '3', '4']}>
                    <Panel header="Overall" key='1'>
                        <Color value={state.style.color} onColorChange={handleColorChange} />
                    </Panel>
                    <Panel header="Spacing" key='2'>
                        <Padding value={state.style} onPaddingChange={handlePaddingChange} />
                        <Margin value={state.style} onMarginChange={handleMarginChange} />
                    </Panel>
                    <Panel header="Typography" key='3'>
                        <FontSize value={state.style.fontSize} onFontSizeChange={handleFontSizeChange} />
                        <TextAlign onTextAlignChange={handleTextAlignChange} />
                    </Panel>
                    <Panel header="Background" key='4'>
                        <BackgroundColor value={state.style.backgroundColor} onBackgroundColorChange={handleBackgroundColorChange} />
                    </Panel>
                </Collapse>
            </TabPane>
        </Tabs>
    )
}

