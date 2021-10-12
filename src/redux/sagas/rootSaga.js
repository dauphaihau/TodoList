import { all } from "redux-saga/effects";
import TodolistRCC from "../../Todolist/TodolistRCC";
import TodolistRFC from "../../Todolist/TodolistRFC";
import * as ToDoListSaga from './ToDoListSaga'
import {theoDoiActionGetTaskApi} from './ToDoListSaga'

export function* rootSaga() {

  yield all([
    ToDoListSaga.theoDoiActionGetTaskApi(),
    ToDoListSaga.theoDoiActionAddTaskApi(),
    ToDoListSaga.theoDoiActionDeleteTask(),
    ToDoListSaga.theoDoiDoneTask(),
    ToDoListSaga.theoDoiRejectTask(),
  ])
}