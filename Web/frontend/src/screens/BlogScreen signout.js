import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const BlogScreen = () => {
    return (
        <div>
            <Card style={{ width: '18rem'}}>
            <Card.Body>
            <Form>
            <Form.Label className="my-3">Signed as Antoine</Form.Label>
           
            <Button className="mx-4"variant="primary" type="submit">
                Sign out
            </Button>
            </Form>
            </Card.Body>
        </Card>
        </div>
    )
}

export default BlogScreen
