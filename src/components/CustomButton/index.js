// @flow
import React, { type ComponentType } from 'react'
import styled from 'styled-components/native'
import type { Element } from 'react'

type Props = {
    bgColor: string,
    color: string,
    title: string,
    onPress: () => void,
};

const StyledText = styled.Text`
  font-size: 14px;
  color: ${props => props.fontColor};
  font-weight: bold;
`
const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`

const CustomButton = (props: Props) : Element<any> => {
  
    return (
      <ButtonContainer bgColor={props.bgColor} onPress={props.onPress} > 
        <StyledText fontColor={props.color} >
          {props.title}
        </StyledText>
      </ButtonContainer>
    )
  }

export default CustomButton