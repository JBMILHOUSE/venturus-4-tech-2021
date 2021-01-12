import React from 'react'
import styled from 'styled-components'

import { Avatar } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import Avatar1 from '../../../assets/avatar1.png'
import Avatar2 from '../../../assets/avatar2.png'
import Avatar3 from '../../../assets/avatar3.png'
import Avatar4 from '../../../assets/avatar4.png'

export const Who = () => {

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
    `
    const AvatarArea = styled.div`
    width: 80%;
    `

    const generetaAvatars = () => {
        return completeWhoList
          .map((who) => { 
            return <Avatar 
                 icon={
                  <img src={who.avatarSource} alt={`Avatar ${who.id}`} />
                 } />
        })
    }
    return <FormItem>
        <WhoLabel> Who </WhoLabel>
        <WhoSeletionArea>
            <SelectedToTheLeftOrRight> <LeftOutlined/> </SelectedToTheLeftOrRight>
                <AvatarArea>
                  {generetaAvatars()}
                </AvatarArea>
            <SelectedToTheLeftOrRight> <RightOutlined/> </SelectedToTheLeftOrRight>
        </WhoSeletionArea>
    </FormItem>
}