import { Collapse, Tabs } from "antd";
import React, { useRef } from "react";
import getElement from "../../../controller/getElement";
import StyleComp from "../../StyleComp";
const { TabPane } = Tabs;
const { Panel } = Collapse;


export default function TabAnt({ id }) {
    const element = getElement(id);
    // create defaultKey for Collapse
    const defaultKey = useRef([]);

    const panel = element.state.styleType.map((panel, index) => {
        defaultKey.current.push(index)
        const temp = StyleComp.find(e => e.name === panel);
        // get Components from temp
        const compMap = temp.Comp.map((e, i) => {
            const Comp = e;
            return(<Comp key={i} element={element}/>)
        });
        return (
            <Panel header={temp.name} key={index}>
                {compMap}
            </Panel>
        )
    })

    return (
        <Tabs centered defaultActiveKey="2">
            <TabPane tab="General" key='1'>

            </TabPane>

            <TabPane tab="Styling" key='2'>
                <Collapse defaultActiveKey={defaultKey.current}>
                    {panel}
                </Collapse>
            </TabPane>
        </Tabs>
    )
}

