import { Button, Col, Row } from 'antd'
import { AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined, MenuOutlined } from '@ant-design/icons'
import React from 'react'
import getElement from '../../../controller/getElement'

export default function TextAlign({ id }) {
    const element = getElement(id);

    const onTextAlignChange = e => {
        const newStyle = { ...element.state.style, textAlign: e.target.id };
        element.updateState({ style: newStyle });
    }

    return (
        <>
            <Col>Text Alignment</Col>
            <Row>
                <Col span={6}>
                    <Button
                        onClick={onTextAlignChange}
                        id="start"
                        style={{ width: "100%" }}
                    >
                        <AlignLeftOutlined style={{ pointerEvents: 'none' }} />
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        onClick={onTextAlignChange}
                        id="center"
                        style={{ width: "100%" }}
                    >
                        <AlignCenterOutlined style={{ pointerEvents: 'none' }} />
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        onClick={onTextAlignChange}
                        id="end"
                        style={{ width: "100%" }}
                    >
                        <AlignRightOutlined style={{ pointerEvents: 'none' }} />
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        onClick={onTextAlignChange}
                        id="justify"
                        style={{ width: "100%" }}
                    >
                        <MenuOutlined style={{ pointerEvents: 'none' }} />
                    </Button>
                </Col>
            </Row>
        </>
    )
}
