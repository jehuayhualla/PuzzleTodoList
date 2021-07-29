// @flow
import React from 'react'
import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Text, View, ScrollView } from 'react-native'
import { get } from 'lodash'
import { TabBar, Route, SceneRendererProps } from 'react-native-tab-view'
import type { Element } from 'react'


const StyledTabBar = styled(TabBar).attrs(props => ({
  indicatorStyle: {
    backgroundColor: "black",
    height: 4,
    
  },
  tabStyle: {
    marginHorizontal: 16,
    padding: 0,
    width: 'auto',
  }
}))`
  background-color: white;
  height: auto;
  border-bottom-width: 1px;
  border-style : solid;
  border-bottom-color : #ebebf0;
`

const StyledText = styled.Text`
  color: ${props => props.inputColor};
  
`
const StyledRenderView = styled.View`
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom-width: ${props => props.isFocused? "2px" : "0px" };;
  border-style : solid;
  border-bottom-color : #000;
`

const TabHeader = (props: any): Element<any> => {
  const renderLabel = ({ route, focused, color }) => {
    return (
      <StyledRenderView isFocused={focused} >
        <StyledText inputColor={color} >{get(route, 'title')}</StyledText>
      </StyledRenderView>
    )
  }
  const renderIndicator = ({ route }) => {
    return (
      <></>
    )
  }

  return (
    
    <StyledTabBar
      renderLabel={renderLabel}
      renderIndicator={renderIndicator}
      activeColor="black"
      inactiveColor="gray"
      scrollEnabled
      {...props}
    />
    
  )
}

export default TabHeader
