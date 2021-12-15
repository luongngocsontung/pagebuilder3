import { Col, Layout, Row } from 'antd'
import { useState } from 'react/cjs/react.development';
import './Padding.css';

export default function Margin({ onMarginChange, value }) {
    const [top, setTop] = useState(value.marginTop);
    const [left, setLeft] = useState(value.marginLeft);
    const [right, setRight] = useState(value.marginRight);
    const [bottom, setBottom] = useState(value.marginBottom);

    const handleMarginChange = e => {
        onMarginChange(e);
        let value = e.target.value;
        let newStyle = null;
        if (!value.toString().length)
            value = 0;
        switch (e.target.id) {
            case 'paddingTop':
                setTop(e.target.value + 'px')
                break;
            case 'paddingLeft':
                setLeft(e.target.value + 'px')
                break;
            case 'paddingRight':
                setRight(e.target.value + 'px')
                break;
            case 'paddingBottom':
                setBottom(e.target.value + 'px')
                break;
            default:
                break;
        }
    }
    return (
        <>
            <Col>Margin</Col>
            <Layout
                style={{ padding: 5 }}
            >
                <Row>
                    {/* Margin Top */}
                    <Col span={8} push={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='marginTop'
                                    type='number'
                                    onChange={handleMarginChange}
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
                                    {/* <option value='%'>%</option> */}
                                    {/* <option value='em'>em</option> */}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {/* Margin Left */}
                    <Col span={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='marginLeft'
                                    type='number'
                                    onChange={handleMarginChange}
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

                    {/* Margin Right */}
                    <Col span={8} push={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='marginRight'
                                    type='number'
                                    onChange={handleMarginChange}
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
                    {/* Margin Bottom */}
                    <Col span={8} push={8}>
                        <Row>
                            <Col span={12}>
                                <input
                                    className="paddingInput"
                                    id='marginBottom'
                                    type='number'
                                    onChange={handleMarginChange}
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
