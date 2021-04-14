import React from 'react'
import { connect } from 'react-redux'
import { getSubtotal } from '../utils'
import styled from 'styled-components'

// imported styles
import { PrimaryButton, Ul, P } from '../styles/styles'

//components
import CartItem from '../components/CartItem'

const Checkout = ({ appState }) => {
  const { items } = appState

  return (
    <Container>
      <H1>Checkout</H1>
      <Offset>
        <Ul>
          {items.map(item => (<CartItem key={item.id} {...item} />))}
        </Ul>
      </Offset>
      {items.length !== 0
        ? <P>Total: ${getSubtotal(items)}</P>
        : <P>empty cart</P>}
      {items.length !== 0
        ? <Button onClick={() => window.alert('purchased')}>Purchase</Button>
        : <Button disabled="true">Purchase</Button>}
    </Container>
  )
}

// styles
const Container = styled.div`
  padding: 2rem 0;
`

const H1 = styled.h1`
  font-size: 2rem;
  padding-bottom: 2rem;
`

const Offset = styled.div`
  position: relative;
  margin-left: -0.5rem;
`

const Button = styled(PrimaryButton)`
  background-color: #5bb75d;

  :disabled {
    background-color: silver;
  }
`

const mapStateToProps = (state) => ({
  appState: state
})

export default connect(mapStateToProps)(Checkout)