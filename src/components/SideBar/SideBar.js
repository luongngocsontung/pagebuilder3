import { Layout, Menu, Drawer } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { useRef, useState } from 'react';
import { sections, sectionItems } from '../../data/subMenuData';
import DrawerElement from '../DrawerElement';
import elementData from '../../data/elementData';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar() {
    const [visible, setVisible] = useState(false);
    const element = useRef();
    

    const showDrawer = (ev) => {
        setVisible(true);
        element.current = ev;
    };

    const onClose = () => {
        setVisible(false);
        element.current = null;
    };

    return (
        <>
            <Sider
                theme='light'
                width={120}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    borderRight: "1px solid rgb(208 209 208)",
                    zIndex: 2
                }}
            >
                <Menu theme="light" mode="vertical" style={{border: 'none'}}>
                    {sections.map(e =>
                        <SubMenu key={e.id} title={e.title}>
                            {sectionItems.map(ev => {
                                if (e.item.includes(ev.id)) {
                                    return (
                                        <MenuItem key={ev.id} onClick={() => showDrawer(ev)}>
                                            {ev.name}
                                        </MenuItem>
                                    )
                                }
                                return null;
                            })}
                        </SubMenu>
                    )}
                </Menu>
            </Sider>
            <Drawer
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                {elementData.map(e => {
                    if(element.current!=null)
                        if(element.current.name === e.name)
                            return <DrawerElement key={e.id} data={e} dragging={onClose}></DrawerElement>
                    return null;
                })}
            </Drawer>
        </>
    )
}

export default SideBar;