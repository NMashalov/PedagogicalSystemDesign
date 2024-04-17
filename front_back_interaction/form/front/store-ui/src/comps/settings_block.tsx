import { Container } from "react-bootstrap";
import { SettingsField, SettingsGroup } from "../datastruct/settings"
import Form from 'react-bootstrap/Form';



function SettingsBlock(props: SettingsField){

    return (
        <Form.Group className="mb-3" controlId={props.name}>
            <Form.Label>{`${props.name}:`}</Form.Label>
            <Form.Control
                style={{width:'50%'}}
                id={props.name}
                aria-describedby={`Help-${props.name}`}
                placeholder={props.default_value ?? ''} 
            />
            {props.hint ?
                <Form.Text id={`Help-${props.name}`} muted> {props.hint}</Form.Text>
                : ''}
        </Form.Group>  
    )
}

export function SettingsBlockGroups(props: SettingsGroup){

    return (
        <Container>
            <h2>{props.name}</h2>
            <Form>
                {props.fields.map(
                    (field) =>  <SettingsBlock {...field}/> 
                )}
            </Form>
        </Container>
    )
}
