import React, { useState } from 'react'
import styled from 'styled-components'

import { Avatar } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import Avatar1 from '../../../assets/avatar1.png'
import Avatar2 from '../../../assets/avatar2.png'
import Avatar3 from '../../../assets/avatar3.png'
import Avatar4 from '../../../assets/avatar4.png'

export const Who = ({ initialSelectedWho, onChangeSelectedWho }) => {

    const [ selectedWho, setSelectedWho ] = useState(initialSelectedWho);

    const completeWhoList = [
     {
         id: 1,
         avatarSource: Avatar1
     },
     {
        id: 2,
        avatarSource: Avatar2
     },
     {
        id: 3,
        avatarSource: Avatar3
     },
     {
        id: 4,
        avatarSource: Avatar4
     },
    ]
    
    const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-left: 1rem;
    `

    const WhoLabel = styled.div`
    font-size: 30px;
    `

    const WhoSeletionArea = styled.div`
    display: flex;
    height: 5rem;
    background: #FFFFFF;
    box-shadow: 5px 5px 10px #A9C4DA;
    border-radius: 5px;
    `

    const SelectedToTheLeftOrRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    cursor: pointer;
    `
    const AvatarArea = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    `
    
    const getAvatarStyle = (avatarIndex) => {
      if(avatarIndex === selectedWho){
          return {
              border: '5px solid #58F326',
              boxSizing: 'border-box',
              cursor: 'pointer',
              height: 'calc(3rem + 5px)',
              width: 'calc(3rem + 5px)',
              margin: '0 0.3rem',
          }
      }

      return {
        height: '3rem',
        width: '3rem',
        margin: '0 0.3rem',
        cursor: 'pointer',
      }
    }

    const generetaAvatars = () => {
        return completeWhoList
          .map((who, i) => { 
            return <Avatar 
                 key={i}
                 style={getAvatarStyle(who.id)}
                 onClick={() => { 
                     setSelectedWho(who.id) 
                     onChangeSelectedWho(who.id) }}
                 icon={
                  <img src={who.avatarSource} alt={`Avatar ${who.id}`} />
                 } />
        })
    }

    const onClickLeft = () => {

        if(selectedWho === 1){
            return selectedWho(4)
        }
       setSelectedWho(selectedWho - 1)
    }

    const onClickRight = () => {
        if(selectedWho === 4){
            return selectedWho(1)
        }
       setSelectedWho(selectedWho + 1)
    }
    return <FormItem>
        <WhoLabel> Who </WhoLabel>
        <WhoSeletionArea>
            <SelectedToTheLeftOrRight onClick={onClickLeft}> <LeftOutlined/> </SelectedToTheLeftOrRight>
                <AvatarArea>
                  {generetaAvatars()}
                </AvatarArea>
            <SelectedToTheLeftOrRight onClick={onClickRight}> <RightOutlined/> </SelectedToTheLeftOrRight>
        </WhoSeletionArea>
    </FormItem>
}