import { Col, Input } from 'antd'

export default function Color({value, onColorChange}) {
    return (
        <>
            <Col>Content Color</Col>
            <Input
                type='color'
                onChange={onColorChange}
                value={value? value : '#000000'}
            />
        </>
    )
}
