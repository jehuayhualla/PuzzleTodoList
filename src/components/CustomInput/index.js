// @flow
import React, { type ComponentType } from 'react'
import styled from 'styled-components/native'
import type { Element } from 'react'

const StyledText = styled.Text`
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-bottom: 8px;
  align-self: flex-start;
`
const InputContainer = styled.View`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  margin: 20px 20px 0px 20px;
  flex-direction: column;
`
const StyledInput = styled.TextInput`
  font-size: 14px;
  height: 40px;
  width: 100%;
  background-color: #ebebf0;
  border-radius: 6px;
  padding-left: 12px;
`
type Props = {
  title: string,
  onChange: (e: string) => void
};
const CustomInput = (props: Props) : Element<any> => {
    return (
      <InputContainer> 
        <StyledText>
          {props.title}
        </StyledText>
        <StyledInput onChangeText={props.onChange} />
      </InputContainer>
    )
  }

export default CustomInput