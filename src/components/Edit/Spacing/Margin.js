import { Col, Layout, Row } from 'antd'
import './Padding.css';

export default function Margin({ onMarginChange, value }) {

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
                                    onChange={onMarginChange}
                                    value={
                                        (value.marginTop && Number.parseInt(value.marginTop) !== 0) ? Number.parseInt(value.marginTop) : ""
                                    }
                                    placeholder={
                                        (value.marginTop && Number.parseInt(value.marginTop) !== 0) ? null : 0
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
                                    onChange={onMarginChange}
                                    value={
                                        (value.marginLeft && Number.parseInt(value.marginLeft) !== 0) ? Number.parseInt(value.marginLeft) : ""
                                    }
                                    placeholder={
                                        (value.marginLeft && Number.parseInt(value.marginLeft) !== 0) ? null : 0
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
                                    onChange={onMarginChange}
                                    value={
                                        (value.marginRight && Number.parseInt(value.marginRight) !== 0) ? Number.parseInt(value.marginRight) : ""
                                    }
                                    placeholder={
                                        (value.marginRight && Number.parseInt(value.marginRight) !== 0) ? null : 0
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
                                    onChange={onMarginChange}
                                    value={
                                        (value.marginBottom && Number.parseInt(value.marginBottom) !== 0) ? Number.parseInt(value.marginBottom) : ""
                                    }
                                    placeholder={
                                        (value.marginBottom && Number.parseInt(value.marginBottom) !== 0) ? null : 0
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
