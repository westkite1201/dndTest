import React, { Component } from 'react'
import styled from 'styled-components'
import Tesk from './Tesk'
const Container = styled.div`
    margin : 8px;
    border : 1px solid lightgrey;
    border-radius : 2px;
`;
const Title = styled.h3`
    paddig : 8px;
`;

const TaskList = styled.div`
    paddig : 8px;
`;
export default class Column extends Component {
    render() {
        const { column, tasks} = this.props;
        return (
            <Container>
                <Title>{column.title}</Title>
                <TaskList>
                  {tasks.map(( task => <Tesk key= {task.id} task ={task} />))}   
                </TaskList>
            </Container>
        )
    }
}
