import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    border: 1px solid grey
`;
export default class Tesk extends Component {
    render() {
        const { task } =this.props;   
        return (
            <Container>
                {task.content}
            </Container>
        )
    }
}
