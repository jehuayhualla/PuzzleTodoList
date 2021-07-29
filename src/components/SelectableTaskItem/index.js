// @flow
import React from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import type { Element } from 'react'

const Container = styled.View`
  height: auto;
  flex-direction: row;
  padding-horizontal: 16px;
  margin-top: 30px;
`

const ContainerText = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
`

const StyledText = styled.Text`
  font-size: 16px;
`

const SelectContainer = styled(TouchableOpacity)`
  border: 2px solid red;
  border-radius: 6px;
  height: 24px;
  width: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isSelected? "red" : "transparent" };
  margin-right: 12px;
`

type Props = {
  selected: boolean,
  taskName: string,
  idTask: number,
  onChange: (id: number, status: boolean) => void
};

const SelectableTaskItem = (props: Props) : Element<any> => {
  
  const onChangeStatus = () => {
    props.onChange(props.idTask, !props.selected)
  }

  return (
    <Container> 
      <SelectContainer isSelected={props.selected} onPress={onChangeStatus} >
        <IonIcon name="md-checkmark" size={18} color="#fff" />
      </SelectContainer>
      <ContainerText>
        <StyledText>
          {props.taskName}
        </StyledText>
      </ContainerText>
    </Container>
  )
}

export default SelectableTaskItem
