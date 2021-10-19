import React, { useState } from "react";
import UseDropPicture from "./UseDropPicture";
import { useDrop } from "react-dnd";
import "../index.css";

///anyting draggable needs the useDrop hook to fxn so create the hook fxn in a file seperatly and apply to each of the draggable element

//the id is important for unique identification
const PictureList = [
	{
		id: 1,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1603986207/sample.jpg",
	},
	{
		id: 2,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1604688097/form-background_otldij.jpg",
	},
	{
		id: 3,
		url: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909224/barbados_otkuqd.webp",
	},
];

const DragnDrop = () => {
	const [board, setBoard] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: "image",
		drop: (item) => addImageToBoard(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));
	const addImageToBoard = (id) => {
		const pictureList = PictureList.filter((picture) => id === picture.id);
		setBoard((board) => [...board, pictureList[0]]);
	};
	return (
		<>
			<div className="image">
				{PictureList.map((picture) => {
					return <UseDropPicture url={picture.url} id={picture.id} />;
				})}
			</div>
			<div className="Board" ref={drop}>
				{board.map((picture) => {
					return <UseDropPicture url={picture.url} id={picture.id} />;
				})}
			</div>
		</>
	);
};

export default DragnDrop;
