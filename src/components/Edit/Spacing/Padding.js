import { Col, Layout, Row } from 'antd'
import { useState } from 'react/cjs/react.development'
import './Padding.css'

export default function Padding({ element }) {
    const [top, setTop] = useState(element.state.style.paddingTop);
    const [left, setLeft] = useState(element.state.style.paddingLeft);
    const [right, setRight] = useState(element.state.style.paddingRight);
    const [bottom, setBottom] = useState(element.state.style.paddingBottom);

    const handlePaddingChange = e => {
        let value = e.target.value;
        let newStyle = null;
        if (!value.toString().length)
            value = 0;

        switch (e.target.id) {
            case 'paddingTop':
                newStyle = { ...element.state.style, paddingTop: value + 'px' }
                setTop(value+'px')
                break;
            case 'paddingLeft':
                newStyle = { ...element.state.style, paddingLeft: value + 'px' }
                setLeft(value+'px')
                break;
            case 'paddingRight':
                newStyle = { ...element.state.style, paddingRight: value + 'px' }
                setRight(value+'px')
                break;
            case 'paddingBottom':
                newStyle = { ...element.state.style, paddingBottom: value + 'px' }
                setBottom(value+'px')
                break;
            default:
                break;
        }
        element.updateState({ style: newStyle });
    }

    return (
        <>
            <Col>Padding</Col>
            <Layout
                style={{ padding: 5 }}
            >
                <Row>
                    {/* Padding Top */}
                    <Col span={8} push={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='paddingTop'
                                    type='number'
                                    onChange={handlePaddingChange}
                                    value={
                                        (top && Number.parseInt(top) !== 0) ? Number.parseInt(top) : ""
                                    }
                                    placeholder={
                                        (top && Number.parseInt(top) !== 0) ? null : 0
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <select className='paddingSelect' defaultValue='px'>
                                    <option value='px'>px</option>
                                    {/* <option value='%'>%</option>
                                    <option value='em'>em</option> */}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {/* Padding Left */}
                    <Col span={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='paddingLeft'
                                    type='number'
                                    onChange={handlePaddingChange}
                                    value={
                                        (left && Number.parseInt(left) !== 0) ? Number.parseInt(left) : ""
                                    }
                                    placeholder={
                                        (left && Number.parseInt(left) !== 0) ? null : 0
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <select className='paddingSelect' defaultValue='px'>
                                    <option value='px'>px</option>
                                    {/* <option value='%'>%</option>
                                    <option value='em'>em</option> */}
                                </select>
                            </Col>
                        </Row>
                    </Col>

                    {/* Padding Right */}
                    <Col span={8} push={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='paddingRight'
                                    type='number'
                                    onChange={handlePaddingChange}
                                    value={
                                        (right && Number.parseInt(right) !== 0) ? Number.parseInt(right) : ""
                                    }
                                    placeholder={
                                        (right && Number.parseInt(right) !== 0) ? null : 0
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <select className='paddingSelect' defaultValue='px'>
                                    <option value='px'>px</option>
                                    {/* <option value='%'>%</option>
                                    <option value='em'>em</option> */}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {/* Padding Bottom */}
                    <Col span={8} push={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='paddingBottom'
                                    type='number'
                                    onChange={handlePaddingChange}
                                    value={
                                        (bottom && Number.parseInt(bottom) !== 0) ? Number.parseInt(bottom) : ""
                                    }
                                    placeholder={
                                        (bottom && Number.parseInt(bottom) !== 0) ? null : 0
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <select className='paddingSelect' defaultValue='px'>
                                    <option value='px'>px</option>
                                    {/* <option value='%'>%</option>
                                    <option value='em'>em</option> */}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
