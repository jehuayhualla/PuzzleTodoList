// @flow
import React from 'react'
import styled from 'styled-components/native'
import type { Element } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomDatePicker from '../../components/CustomDatePicker'
import CustomSelect from '../../components/CustomSelect'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
`
const TimePicker = styled(CustomDatePicker)`
  display: flex;
  flex: 1;
`
const CustomButtonFooter = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`
type Props = {
  onAdd: (task: string) => void,
};

const formObj = {
  title: "",
}

const AddTaskForm = (props: Props) : Element<any> => {
    const navigation = useNavigation()
    const [title, setTitle] = React.useState<string>("");

    const handleChangeTitle = (e: string) => {
      setTitle(e)
    }

    const handleChange = (e) => {
      console.log(e)
    }

    const handleButtonPress = () => {
      if(title === "") {
        alert("Error: Field Empty")
        return
      }
      alert("Task added")
      props.onAdd(title)
    }

    const RemindDict = [
      {
        label: "10 min early",
        value: "10min"
      },
      {
        label: "20 min early",
        value: "20min"
      }
    ]

    const RepeatDict = [
      {
        label: "Weekly",
        value: "weekly"
      },
      {
        label: "Daily",
        value: "daily"
      }
    ]

    return (
      <StyledView> 
        <Container><CustomInput title="Title" onChange={handleChangeTitle} /></Container>
        <Container><CustomDatePicker type="date" title="Deadline" onChange={handleChange}/></Container>
        <Container>
          <TimePicker type="time" title="Start time" onChange={handleChange}/>
          <TimePicker type="time" title="End time" onChange={handleChange}/>
        </Container>
        <Container><CustomSelect title="Remind" onChange={handleChange} items={RemindDict} /></Container>
        <Container><CustomSelect title="Repeat" onChange={handleChange} items={RepeatDict} /></Container>
        <CustomButtonFooter>
          <CustomButton title="Create a task" color="#fff" bgColor="#5eba7d" onPress={handleButtonPress} /> 
        </CustomButtonFooter>
      </StyledView>
    )
  }

export default AddTaskForm