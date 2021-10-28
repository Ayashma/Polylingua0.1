import React from 'react'
import { Card, Form, Button} from 'react-bootstrap'

const BlogScreen = () => {
    return (
        <div>
            <Card style={{ width: '20rem'}}>
            <Card.Body>
            <Form>
            <Form.Label className="my-3">Native language</Form.Label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Choose your native language</option>
                <option value="1">English</option>
                <option value="2">Ukrainian</option>
                <option value="3">Russian</option>
            </select>

            <Form.Label className="my-3">The language you want to learn</Form.Label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Choose a language to study</option>
                <option value="1">English</option>
                <option value="2">Ukrainian</option>
                <option value="3">Russian</option>
            </select>
            <Form.Label className="my-3">Choose your level in this language</Form.Label>
            {['radio'].map((type) => (
                <div key={`default-${type}`}>
                <Form.Check
                    inline
                    label="Beginner"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    inline
                    label="Elementary"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Pre-intermediate"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Intermediate"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Upper Intermediate"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Advanced"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                </div>
            ))}

                        
            <Button className="my-3" variant="primary" type="submit">
                Confirm registration
            </Button>
            </Form>
            </Card.Body>
        </Card>
        </div>
    )
}

export default BlogScreen
