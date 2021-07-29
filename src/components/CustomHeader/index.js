// @flow
import React from 'react'
import styled from 'styled-components/native';
import { Text, TouchableOpacity, Platform } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import type { Element } from 'react'

const ContainerHeader = styled.View`
  flex-grow: 1;
  flex-direction: row;
  padding-horizontal: ${Platform.OS === 'ios' ? "16px" : "0px"} ;
`
const ContainerText = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const ContainerIcon = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`
const TitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
`
const ArrowBackTouch = styled(TouchableOpacity)`
  padding-right: 16px;
`

const StyledIonIcon = styled(IonIcon)`
  padding-left: 16px;
`

const StyledFontistoIcon = styled(FontistoIcon)`
  padding-left: 16px;
`

type Props = {
  title: string,
  canBack: boolean,
  showIcons: boolean,
  onPress?: () => void,
};

const CustomHeader = (props: Props) : Element<any> => {
  
  return (
    <ContainerHeader> 
      <ContainerText> 
        { props.canBack && (
        <ArrowBackTouch onPress={props.onPress} >
          <IonIcon name="chevron-back-outline" size={18} color="#000" />
        </ArrowBackTouch>)}
        <TitleText> 
          {props.title} 
        </TitleText> 
      </ContainerText>
      { props.showIcons && (<ContainerIcon>
        <StyledIonIcon name="search" size={18} color="#000" />
        <StyledFontistoIcon name="bell" size={16} color="#000" />
        <StyledIonIcon name="ios-menu" size={18} color="#000" />
      </ContainerIcon>)}
    </ContainerHeader>
  )
}

export default CustomHeader
