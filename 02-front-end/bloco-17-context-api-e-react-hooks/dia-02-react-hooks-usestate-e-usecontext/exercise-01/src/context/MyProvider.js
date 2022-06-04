import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });
  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    setOrderList({
      ...orderList,
      [itemType]: orderState.filter((_, index) => index !== indexPresentInList),
    });
    // Resolução da Trybe
    // orderState.splice(indexPresentInList, 1);
    // setOrderList({ ...orderList, [itemType]: orderState });
  };

  const updateValueItemInList = (orderState, indexPresentInList, newItem) => {
    setOrderList({
      ...orderList,
      [newItem.itemType]: orderState.map((order, index) => {
        if (index === indexPresentInList) return newItem;
        return order;
      })
    });
    // Resolução da Trybe
    // orderState.splice(indexPresentInList, 1, newItem);
    // setOrderList({ ...orderList, [newItem.itemType]: orderState });
  };

  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(orderState, indexPresentInList, newItem.itemType);
    }
    updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  const addItemToList = (newItem) => {
    setOrderList({
      ...orderList,
      [newItem.itemType]: orderList[newItem.itemType].concat(newItem),
    });
  };

  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    const { value } = target;
    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    const isPresentInList = orderList[itemType].some((order) => order.id === itemName);
    if (!isPresentInList) return addItemToList(newItem);
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
