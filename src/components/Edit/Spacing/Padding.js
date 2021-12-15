import { Col, Layout, Row } from 'antd'
import './Padding.css'

export default function Padding({ onPaddingChange, value }) {

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
                                    onChange={onPaddingChange}
                                    value={
                                        (value.paddingTop && Number.parseInt(value.paddingTop) !== 0) ? Number.parseInt(value.paddingTop) : ""
                                    }
                                    placeholder={
                                        (value.paddingTop && Number.parseInt(value.paddingTop) !== 0) ? null : 0
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
                                    onChange={onPaddingChange}
                                    value={
                                        (value.paddingLeft && Number.parseInt(value.paddingLeft) !== 0) ? Number.parseInt(value.paddingLeft) : ""
                                    }
                                    placeholder={
                                        (value.paddingLeft && Number.parseInt(value.paddingLeft) !== 0) ? null : 0
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
                                    onChange={onPaddingChange}
                                    value={
                                        (value.paddingRight && Number.parseInt(value.paddingRight) !== 0) ? Number.parseInt(value.paddingRight) : ""
                                    }
                                    placeholder={
                                        (value.paddingRight && Number.parseInt(value.paddingRight) !== 0) ? null : 0
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
                                    onChange={onPaddingChange}
                                    value={
                                        (value.paddingBottom && Number.parseInt(value.paddingBottom) !== 0) ? Number.parseInt(value.paddingBottom) : ""
                                    }
                                    placeholder={
                                        (value.paddingBottom && Number.parseInt(value.paddingBottom) !== 0) ? null : 0
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
