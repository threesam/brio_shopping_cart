import React from 'react'
import { connect } from 'react-redux'
import { deleteItemFromCart } from '../actions'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'


const CartItem = ({ canDelete = false, name, price, id, image, quantity, deleteExistingItemFromCart, appState }) => {
  function handleDeleteItemFromCart() {
    const item = {
      id
    }
    deleteExistingItemFromCart(item)
  }

  return (
    <Li key={id}>
      <img width="100" height="100" src={image} alt={`container of ${name}`} />
      <div>
        <H3>{name}</H3>
        <span>({quantity}) x ${price}</span>
      </div>
      {canDelete
        ? (<Button onClick={handleDeleteItemFromCart}>
          <MdClose title="delete item" size="1.5rem" style={{ color: 'silver' }} />
        </Button>)
        : ''}
    </Li>
  )
}

// styles

const Li = styled.li`
  width: 100%;
  max-width: calc(400px - 1rem);
  display: grid;
  grid-template-columns: 100px 1fr 2rem;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid silver;
`

const H3 = styled.h3`
  margin-bottom: 0.5rem;
`

const Button = styled.button`
  position: relative;
  top: 0;
  right: 0;
  height: 2rem;
  width: 2rem;
  border: none;
  background: none;
  outline: none;
  margin: 0;
`

// redux

const mapStateToProps = (state) => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  deleteExistingItemFromCart: (item) => dispatch(deleteItemFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)