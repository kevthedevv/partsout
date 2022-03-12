import React from 'react'
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
  return (
    <div>
        <Form>
            <Form.Group size="lg" controlId="email">
                <Form.Control
                        placeholder="Search for a product"
                />
            </Form.Group>
        </Form>
    </div>
  )
}

export default Search