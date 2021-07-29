// @flow
import React, { useState } from 'react'
import styled from 'styled-components/native'
import type { Element } from 'react'
import {
  Modal, Text, Pressable, TouchableHighlight, View
} from "react-native";
import {Picker} from '@react-native-picker/picker';

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
const StyledInput = styled.TouchableOpacity`
  height: 40px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: #ebebf0;
  border-radius: 6px;
  padding-left: 12px;
  align-items: flex-start;
  justify-content: center;
`

type Props = {
  title: string,
  onChange: (any) => void,
  items: Array<{ label: string, value: string }>,
};
const CustomSelect = (props: Props) : Element<any> => {
  const [show, setShow] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedLabel, setSelectedLabel] = useState("")

  const onChangePicker = (itemValue, itemIndex) =>  {
    setSelectedOption(itemValue)
    setSelectedLabel(props.items[itemIndex].label)
    props.onChange(itemValue)
    setShow(false)
  }
  
  return (
    <InputContainer> 
      <StyledText>
        {props.title}
      </StyledText>
      <StyledInput onPress={() => setShow(true)} >
        <Text> 
          {selectedLabel} 
        </Text>
        <Modal
          transparent={true}
          animationType='slide'
          visible={show}
          supportedOrientations={['portrait']}
          onRequestClose={() => setShow(false)}
        > 
        <Pressable
            style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}
            activeOpacity={1}
            visible={show}
            onPress={() => setShow(false)}
        >
          <TouchableHighlight
            underlayColor='transparent'
            style={{flex: 1}}
          >
            <View
                style={{backgroundColor: "#FFFFFF", overflow: 'hidden', borderTopLeftRadius: 25, borderTopRightRadius: 25}}
            >
              <View style={{marginTop: 20, marginBottom: 20, backgroundColor: 'white'}}>
              <Picker
                selectedValue={selectedOption}
                onValueChange={onChangePicker}
                style={{ height: 65 }}
              >
                {
                  props.items.map( (o,i) =>  <Picker.Item key={i} label={o.label} value={o.value} />)
                }
              </Picker>
              </View>
            </View>
          </TouchableHighlight>
        </Pressable>
        </Modal>
      </StyledInput>
      
    </InputContainer>
  )
}

export default CustomSelect