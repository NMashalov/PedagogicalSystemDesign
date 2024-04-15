import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Settings(){

    return (
        <Form>
            <InputGroup>
                <Form.Label>Фильтры</Form.Label>
                <Form.Select size="lg">
                    <option>Large select</option>
                </Form.Select>
            </InputGroup>
            <InputGroup>
                <Form.Label>Пропорция</Form.Label>
                <Form.Range />
            </InputGroup>  
        </Form>
    )

}