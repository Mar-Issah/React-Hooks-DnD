import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "./Data";

//DND require an item type for the element to be dragged you might have multuple items

//ref to reference our item in JSX

//when you use the comma in the useDrop it is because you dont want to use the isOver

//accept is the item type
//we want to implement a hover fxn for what happens when the user hovers on the item

//
const Item = ({ item, index, status, moveItem }) => {
	const ref = useRef(null);

	const [, drop] = useDrop(() => ({
		accept: ITEM_TYPE,
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) {
				return;
			}
		},
	}));
	return <div></div>;
};

export default Item;
