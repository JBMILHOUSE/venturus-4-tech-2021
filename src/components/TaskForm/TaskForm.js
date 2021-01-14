import React from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

import { WhatToDo } from './WhatToDo/WhatToDo'
import { Who } from './Who/Who'
import { IsItUrgent } from './IsItUrgent/IsItUrgent'
import { Save } from './Save/Save'

export const TaskForm = ({ loading, submitNewTask }) => {
   
   const FormValues = {
     taskId: uniqid(),
     status: 'To Do',
     whatToDo: 'So, what area you up to?',
     selectedWho: 1,
     priority: {
       urgency: 'low',
       color: '#71A1FF',
       selected: true,
     },
     createdAt: ''
   }

   const onChangeWhatToDo = (whatToDo) => {
     FormValues.whatToDo = whatToDo
   }

   const onChangeSelectedWho = (selectedWho) => {
    FormValues.selectedWho = selectedWho
  }

  const onChangePriority = (urgency) => {
    FormValues.priority = urgency
  }

  const saveTask = () => {
    FormValues.createdAt = (new Date()).getTime()
    console.log(FormValues);
    submitNewTask(FormValues);
  }

   const TaskFormLayout = styled.div`
    grid-column: 2 / 5;
    grid-row: 2;
    display: flex;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none; 
   `

   return <TaskFormLayout>
     <WhatToDo initialWhatToDo={FormValues.whatToDo} onChangeWhatToDo={onChangeWhatToDo}/>
     <Who initialSelectedWho={FormValues.selectedWho} onChangeSelectedWho={onChangeSelectedWho} />
     <IsItUrgent initialUrgency={FormValues.priority} onChangePriority={onChangePriority} />
     <Save loading={loading} saveTask={saveTask} />
   </TaskFormLayout>
  

}