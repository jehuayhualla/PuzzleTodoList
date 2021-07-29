import React, { useLayoutEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions
} from "react-native";
import { useNavigation } from '@react-navigation/native'

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
          width: '100%',
        },
        headerStyle: {
          height: 100,
        },
        headerLeft: null,
      })
    }, [navigation])

    return (
      <SafeAreaView style={[styles.container]}>
          <AddTaskForm onAdd={addTodo} />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

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
