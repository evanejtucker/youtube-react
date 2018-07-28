import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class SearchBar extends Component {

    state = {
        term: ''
    }

    handleInputChange = () => {

    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="term" hidden>Email</Label>
                    <Input 
                        type="term" 
                        name="term" 
                        id="term" 
                        placeholder="Search for something!"
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default SearchBar;

