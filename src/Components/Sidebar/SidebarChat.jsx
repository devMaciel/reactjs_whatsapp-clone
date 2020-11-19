import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		// Random String to generate the Random Avatar
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt("Please enter name for chat");

		if (roomName) {
			// database stuff
		}
	};

	return !addNewChat ? (
		<div className='sidebarChat'>
			<Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
			<div className='sidebarChat__info'>
				<h2>Room name</h2>
				<p>Last message...</p>
			</div>
		</div>
	) : (
		<div className='sidebarChat' onClick={createChat}>
			<h2>Add new chat</h2>
		</div>
	);
}

export default SidebarChat;
