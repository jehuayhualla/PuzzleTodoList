// @flow
import React, { useState } from 'react'
import styled from 'styled-components/native'
import type { Element } from 'react'
import {
  Modal, Text, Pressable, TouchableHighlight, View
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from "moment"

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
  type: "date" | "time",
};
const CustomDatePicker = (props: Props) : Element<any> => {
  const [date, setDate] = useState(new Date());
  const [pickedDate, setPickedDate] = useState(null);
  const [show, setShow] = useState(false);
  const onChangeDate = (event, selectedDate) => {
    setShow(false)
    setDate(selectedDate)
    console.log(selectedDate)
    setPickedDate(selectedDate)
    props.onChange(selectedDate)
  }
  
  return (
    <InputContainer> 
      <StyledText>
        {props.title}
      </StyledText>
      <StyledInput onPress={() => setShow(true)} >
        <Text> 
          {
           pickedDate ? props.type === "date" ? moment(date).format('YYYY-MM-DD') : moment(date).format('HH:mm') : ""
          } 
        </Text>
        <Modal
          transparent={true}
          animationType='slide'
          visible={show}
          supportedOrientations={['portrait']}
          onRequestClose={() => setShow(true)}
        > 
        <Pressable
            style={{flex: 1, alignItems: 'flex-end', flexDirection: 'row'}}
            activeOpacity={1}
            visible={show}
            //onPress={() => setShow(false)}
        >
          <TouchableHighlight
            underlayColor='transparent'
            style={{flex: 1}}
          >
            <View
                style={{backgroundColor: "#FFFFFF", overflow: 'hidden', borderTopLeftRadius: 25, borderTopRightRadius: 25}}
            >
              <View style={{marginTop: 20, marginBottom: 20, backgroundColor: 'white'}}>
                <DateTimePicker
                  display='default'
                  mode={props.type}
                  value={date}
                  onChange={onChangeDate}
                />
              </View>
            </View>
          </TouchableHighlight>
        </Pressable>
        </Modal>
      </StyledInput>
      
    </InputContainer>
  )
}

export default CustomDatePicker