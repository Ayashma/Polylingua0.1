import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const BlogScreen = () => {
    return (
        <div>
            <Card style={{ width: '18rem'}}>
            <Card.Body>
            <Form>
            <Form.Label>Registration</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
                <Form.Text className="text-muted">
                Your Username must be 4-16 characters.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat your password</Form.Label>
                <Form.Control type="password" placeholder="Repeat your password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Next
            </Button>
            </Form>
            </Card.Body>
        </Card>
        </div>
    )
}

export default BlogScreen
