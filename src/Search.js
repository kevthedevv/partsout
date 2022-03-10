import React from 'react'
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
  return (
    <div>
        <Form>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    autoFocus
                />
            </Form.Group>
            <Button block size="lg" type="submit" >Search</Button>
        </Form>
    </div>
  )
}

export default Search