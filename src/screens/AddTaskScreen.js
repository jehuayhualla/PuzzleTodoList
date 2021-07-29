import React, { useLayoutEffect } from 'react';
import {
  View,
  Platform
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native';

import CustomHeader from '../components/CustomHeader';
import AddTaskForm from '../sections/AddTaskForm';

import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions';

import type { Element } from 'react'

const AddTaskScreen = ({ todo_list, addTodo, deleteTodo }): Element<any> => {
    const navigation = useNavigation()

    const HandleGoBackPress = () => {
        navigation.goBack()
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => (
          <CustomHeader canBack={true} showIcons={false} title="Add task" onPress={HandleGoBackPress} />
        ),
        headerTitleContainerStyle: {
          width: Platform.OS === 'ios' ? "100%" : null,
        },
        headerStyle: {
          height: Platform.OS === 'ios' ? 100 : 60,
        },
        headerLeft: null,
      })
    }, [navigation])

    return (
      <StyledSafeAreaView>
          <AddTaskForm onAdd={addTodo} />
      </StyledSafeAreaView>
    )
}

const StyledSafeAreaView = styled.SafeAreaView`
  display: flex;
  flex-grow: 1;
  background-color: white;
`

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskScreen)
