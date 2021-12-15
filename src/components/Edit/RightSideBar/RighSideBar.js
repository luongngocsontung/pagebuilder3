import './RightSideBar.css'
import { Alert } from "antd"
import { createSubscription, useSubscription } from 'global-state-hook';
import TabAnt from '../TabAnt/TabAnt';
import Sider from 'antd/lib/layout/Sider';

const styleId = createSubscription({
    id: '0'
})
export { styleId }

export default function RighSideBar() {
    const { state } = useSubscription(styleId);
    return (
        <Sider
            key={state.id}
            theme='light'
            width= {280}
            style={{
                overflow: 'auto',
                backgroundColor: 'white',
                height: '100vh',
                position: 'fixed',
                borderLeft: "1px solid rgb(208 209 208)",
                right: 0,
            }}
        >
            {state.id != null && state.id !== '0'?
                <TabAnt 
                    id={state.id}
                />
                :
                <Alert
                    message="Select an element from the page canvas on the left to see it's parameters here."
                    type="info"
                    style={{ margin: 15 }}
                />
            }
        </Sider>
    )
}
