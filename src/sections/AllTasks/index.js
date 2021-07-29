// @flow
import React from 'react'
import styled from 'styled-components/native'
import type { Element } from 'react'
import SelectableTaskItem from '../../components/SelectableTaskItem'
const StyledView = styled.ScrollView`
  display: flex;
  flex: 1;
`

type Props = {
    tasks: Array<{id: number, task: string, completed: boolean}>,
    changeStatusTask: (id: number, status: boolean) => void
};


const AllTask = (props: Props) : Element<any> => {
    const changeStatus = (id: number, status: bool) => {
      props.changeStatusTask(id, status)
    }
    return (
      <StyledView> 
        {
          props.tasks.map((o,e)=> <SelectableTaskItem key={e} selected={o.completed} taskName={o.task} idTask={o.id} onChange={changeStatus} />)
        }
        
      </StyledView>
    )
  }

export default AllTask