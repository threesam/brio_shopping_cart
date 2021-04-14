import React from 'react'
import { Link } from '@reach/router'
import { indexToLetter } from '../utils'
import styled from 'styled-components'

const Home = ({ products }) => (
  <>
    <H1>Products</H1>
    <Grid>
      {products.map((product, i) => {
        const { name, price, image } = product
        return (
          <Li key={i}>
            <Product to={`product-${indexToLetter(i)}`}>
              <img width="250" height="250" src={image} alt={`container of ${name}`} />
              <p>{name}</p>
              <span>${price}</span>
            </Product>
          </Li>
        )
      })}
    </Grid>
  </>
)

// styles
const H1 = styled.h1`
  padding: 2rem 0;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 2rem;
`

const Li = styled.li`
  width: 250px;
  background-color: silver;
  border-radius: 13px;
  box-shadow: 2px 2px 1px rgba(0,0,0,0.1);
  filter: grayscale(50%);
  transition: all 0.3s ease-in-out;
  
  
  :hover {
    height: auto;
    filter: grayscale(0%);
    box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
  }
`

const Product = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction:column;

  p, span {
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
  }

  span {
    display: block;
    padding-bottom: 1rem;
  }
`

export default Home