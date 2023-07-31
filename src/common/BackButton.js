import React from 'react'
import { styled } from 'styled-components'
import { TiArrowBackOutline } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const BackBtn = styled.button`
    padding: 15px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 5px;
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    line-height: 0;
    position: absolute;
    margin-left: 5%;
    display: inline-block;

    &:hover {
        background-color: rgba(239, 238, 232, .1);
        transition: .2s ease all;
    }
`

const BackButton = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
      }

  return (
    <BackBtn onClick={goBack}>
        <TiArrowBackOutline />
    </BackBtn>
  )
}

export default BackButton