import React from "react";
import { useDrag } from "react-dnd";

const UseDropPicture = ({ id, url }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<img
			ref={drag}
			src={url}
			width="150px"
			style={{ border: isDragging ? "5px solid red" : "0px" }}
			alt="my pic"
		/>
	);
};

export default UseDropPicture;
