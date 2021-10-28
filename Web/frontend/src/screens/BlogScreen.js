import React from 'react'
import { Card, Alert, Button} from 'react-bootstrap'


const BlogScreen = () => {
    return (
        <div>
            <Card style={{ width: '25rem'}}>
            <Card.Body>
            <Alert variant={"primary"}>
            Are you sure you want to permanently <Alert.Link href="#">delete</Alert.Link> your account? This action is irreversible.
            <Button className="mx-5" variant="danger" type="submit">
                Yes
            </Button>
            <Button className="my-3" variant="success" type="submit">
                No
            </Button>
            </Alert>
            </Card.Body>
        </Card>
        </div>
    )
}

export default BlogScreen
