import { Collapse, Tabs } from "antd";
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
    return (
        <Tabs centered defaultActiveKey="2">
            <TabPane tab="General" key='1'>

            </TabPane>

            <TabPane tab="Styling" key='2'>
                <Collapse defaultActiveKey={['1', '2', '3', '4']}>
                    <Panel header="Overall" key='1'>
                        <Color id={id} />
                    </Panel>
                    <Panel header="Spacing" key='2'>
                        <Padding id={id} />
                        <Margin id={id} />
                    </Panel>
                    <Panel header="Typography" key='3'>
                        <FontSize id={id} />
                        <TextAlign id={id} />
                    </Panel>
                    <Panel header="Background" key='4'>
                        <BackgroundColor id={id} />
                    </Panel>
                </Collapse>
            </TabPane>
        </Tabs>
    )
}

