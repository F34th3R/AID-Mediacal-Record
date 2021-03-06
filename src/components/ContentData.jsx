import React from 'react'
import styled from 'styled-components'

export const ContentData = ({ label, content, margintTop }) => {
  const StyledContentData = styled.div`
    width: 100% !important;
    text-align: left;
    margin-top: ${margintTop ? '18px' : '0'};
    .label {
      width: 100% !important;
      font-size: 12px;
      color: #b70c12;
    }
    .content {
      width: 100% !important;
      font-family: 'Segoe UI';
      font-size: 16px;
      font-weight: 600;
    }
  `

  return (
    <StyledContentData>
      <div className="label">{label}</div>
      <div className="content">{content}</div>
    </StyledContentData>
  )
}
