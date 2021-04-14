import React from 'react'
import styled from 'styled-components'

function PageLayout({ children }) {
  return (
    <Div>
      {children}
    </Div>
  )
}

const Div = styled.div`
  padding: 0 200px;
  @media (max-width: 750px) {
    padding: 0 2rem;
  }
`

export default PageLayout
