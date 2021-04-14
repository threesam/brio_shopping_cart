import React from 'react'
import { connect } from 'react-redux'
import { getSubtotal } from '../utils'
import styled from 'styled-components'

// imported styles
import { Container, PrimaryButton, Ul, P } from '../styles/styles'

//components
import CartItem from '../components/CartItem'

const Checkout = ({ appState }) => {
  const { items } = appState

  return (
    <Container>
      <H1>Checkout</H1>
      {items.length !== 0
        ? (
          <>
            <Offset>
              <Ul>
                {items.map(item => (<CartItem key={item.id} {...item} />))}
              </Ul>
            </Offset>
            <P>Total: ${getSubtotal(items)}</P>
          </>
        )
        : (
          <>
            <P>Cart is empty</P>
            <P>Total: $0.00</P>
          </>
        )
      }
      <Button disabled={items.length === 0} onClick={() => window.alert('purchased')}>Purchase</Button>
    </Container>
  )
}

// styles

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
`

const mapStateToProps = (state) => ({
  appState: state
})

export default connect(mapStateToProps)(Checkout)