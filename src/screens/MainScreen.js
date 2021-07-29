import React, { useLayoutEffect } from 'react';
import {
  View,
  Platform
} from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native';

import TabHeader from '../components/TabHeader'
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton'
import AllTasks from '../sections/AllTasks'
import type { Element } from 'react'

import { connect } from 'react-redux';
import { addTodo, deleteTodo, changeTask } from '../redux/actions';

const MainScreen = ({ todo_list, changeTask}): Element<any> => {
    const navigation = useNavigation()

    const AllTaskRoute = () => (
      <AllTasks tasks={todo_list} changeStatusTask={changeTask} />
    );
    
    const CompletedTaskRoute = () => {
      const filterTodo = todo_list.filter((todo) => todo.completed !== false)
      return <AllTasks tasks={filterTodo} changeStatusTask={changeTask} />
    };

    const UncompletedTaskRoute = () => {
      const filterTodo = todo_list.filter((todo) => todo.completed === false)
      return <AllTasks tasks={filterTodo} changeStatusTask={changeTask} />
    };

    const OtherRoute = () => (
      <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );
    
    const renderScene = SceneMap({
        all: AllTaskRoute,
        completed: CompletedTaskRoute ,
        uncompleted: UncompletedTaskRoute,
        favorite: OtherRoute,
        other: OtherRoute,
    });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'all', title: 'All' },
      { key: 'completed', title: 'Completed' },
      { key: 'uncompleted', title: 'Uncompleted' },
      { key: 'favorite', title: 'Favorite' },
      { key: 'other', title: 'Another Tab' },
    ]);
    
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => (
          <CustomHeader canBack={false} showIcons={true} title="Board"/>
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

    const handleButtonPress = () => {
      navigation.navigate("addtask")
    }

    return (
      <StyledSafeAreaView>
        <TabView
            renderTabBar={TabHeader}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
        <CustomButton title="Create a task" color="#fff" bgColor="#5eba7d" onPress={handleButtonPress} />
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

const mapDispatchToProps = { changeTask }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)