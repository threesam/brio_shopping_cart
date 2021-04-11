// multipy items by price, then add and return total
export const getSubtotal = (items) => (
  items
    .map(item => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr)
)

// convert index to letter
export const indexToLetter = (index) => {
  const FIRST_ASCII_LETTER = 65
  return String.fromCharCode(index + FIRST_ASCII_LETTER).toLowerCase()
}