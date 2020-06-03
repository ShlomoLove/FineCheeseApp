import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const StyledAlert = styled.div`
  font-family: 'Cera Pro Bold';
  font-size: 20px;
  color: ${props => props.color};

  @media(max-width: 430px) {
    font-size: 14px; 
  }
`

const AlertMessage = props => {
  const { alertMessage } = props
  return (
    <>
    {alertMessage === 'notValid' ?
      <StyledAlert color={'#B22222'}>
        <FontAwesomeIcon icon={faExclamationTriangle}/>
        Enter a valid 5 digit zip code for Los Angeles
      </StyledAlert> 
      : null
    }
    {alertMessage === 'errorResponse' ?
      <StyledAlert color={'#EE8C1D'}>
        <FontAwesomeIcon icon={faExclamationTriangle}/>
        Frank's Fine Cheeses is not in your area
      </StyledAlert> 
      : null
    }
    {alertMessage === 'noCheeses' ?
      <StyledAlert color={'#211B1B'}>
        <FontAwesomeIcon icon={faExclamationTriangle}/>
        No Cheeses Matched Your Search
      </StyledAlert> 
      : null
    }
    </>
  )
}

export default AlertMessage