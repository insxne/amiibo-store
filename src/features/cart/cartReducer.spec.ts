import cartReducer, { cartSlice, initialState } from './cartSlice'

const product = {
  id: 'Isabelle - Kimono01810201011a0502',
  imageUrl:
    'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810201-011a0502.png',
  imageAlt: 'Isabelle - Kimono',
  title: 'Isabelle - Kimono',
  category: 'Card',
  price: 100,
}

describe('features > cart > cartReducer', () => {
  beforeEach(() => {
    localStorage.removeItem('cart')
  })

  it(`add product`, () => {
    const expectedState = {
      total: 100,
      quantity: 1,
      items: [
        {
          item: product,
          quantity: 1,
          total: 100,
        },
      ],
    }
    const action = cartSlice.actions.addProduct(product)

    expect(cartReducer(initialState, action)).toEqual(expectedState)
  })

  it(`add four product`, () => {
    const expectedState = {
      total: 400,
      quantity: 4,
      items: [
        {
          item: product,
          quantity: 4,
          total: 400,
        },
      ],
    }
    const action = cartSlice.actions.addProduct(product)
    const currentState = [1, 2, 3, 4].reduce((state) => {
      return cartReducer(state, action)
    }, initialState)

    expect(currentState).toEqual(expectedState)
  })

  it(`remove product`, () => {
    const expectedState = initialState
    const addProductAction = cartSlice.actions.addProduct(product)
    const currentState = [1, 2, 3, 4].reduce(
      (state) => cartReducer(state, addProductAction),
      initialState
    )
    const removeProductAction = cartSlice.actions.removeProduct(product)
    const nextState = cartReducer(currentState, removeProductAction)

    expect(nextState).toEqual(expectedState)
  })

  it(`update quantity product`, () => {
    const expectedState = {
      items: [
        {
          item: product,
          quantity: 10,
          total: 1000,
        },
      ],
      quantity: 10,
      total: 1000,
    }
    const addProductAction = cartSlice.actions.addProduct(product)
    const currentState = cartReducer(initialState, addProductAction)

    const updateProductQuantityAction = cartSlice.actions.updateProductQuantity(
      {
        product,
        quantity: 10,
      }
    )
    const nextState = cartReducer(currentState, updateProductQuantityAction)
    expect(nextState).toEqual(expectedState)
  })
})
