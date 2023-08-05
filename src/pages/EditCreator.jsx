import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Modal from "react-modal";

const EditCreator = ({ data }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const { id } = useParams();
	const [creator, setCreator] = useState({
		id: null,
		name: "",
		youtube: "",
		twitter: "",
		instagram: "",
		description: "",
		imageURL: "",
	});

	useEffect(() => {
		const result = data.filter((item) => String(item.id) === id)[0];
		setCreator({
			name: result.name,
			youtube: result.youtube,
			twitter: result.twitter,
			instagram: result.instagram,
			description: result.description,
			imageURL: result.imageURL,
		});
	}, [data, id]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCreator((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const updateCreator = async (event) => {
		event.preventDefault();
		const { error } = await supabase
			.from("creators")
			.update({
				name: creator.name,
				youtube: creator.youtube,
				twitter: creator.twitter,
				instagram: creator.instagram,
				description: creator.description,
				imageURL: creator.imageURL,
			})
			.eq("id", id);

		if (error) {
			console.log(error);
		}

		window.location = "/";
	};

	const deleteCreator = async (event) => {
		event.preventDefault();
		const { error } = await supabase.from("creators").delete().eq("id", id);

		if (error) {
			console.log(error);
		}

		window.location = "/";
	};

	return (
		<div className='AddEditCreator'>
			<form>
				<label>Name</label>
				<input
					type='text'
					id='name'
					name='name'
					value={creator.name}
					onChange={handleChange}
					required
				/>

				<label>imageURL</label>
				<input
					type='text'
					id='imageURL'
					name='imageURL'
					value={creator.imageURL}
					onChange={handleChange}
					required
				/>

				<label>Description</label>
				<textarea
					name='description'
					rows='3'
					cols='50'
					id='description'
					value={creator.description}
					onChange={handleChange}
					required
				></textarea>

				<h3>Social Media Links</h3>

				<label>
					<span className='fab fa-youtube'></span> YouTube
				</label>
				<input
					type='text'
					id='youtube'
					name='youtube'
					value={creator.youtube}
					onChange={handleChange}
				/>

				<label>
					<span className='fab fa-twitter'></span> Twitter
				</label>
				<input
					type='text'
					id='twitter'
					name='twitter'
					value={creator.twitter}
					onChange={handleChange}
				/>

				<label>
					<span className='fab fa-instagram'></span> Instagram
				</label>
				<input
					type='text'
					id='instagram'
					name='instagram'
					value={creator.instagram}
					onChange={handleChange}
				/>
			</form>

			<div className='submit-or-delete'>
				<button type='submit' onClick={updateCreator}>
					Submit
				</button>
				<button className='delete-button' onClick={openModal}>
					Delete
				</button>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Delete'
				className='delete-modal'
				overlayClassName='overlay'
			>
				<h2>⚠️ Final confirmation ⚠️</h2>
				<p>Are you absolutely sure you want to delete {creator.name}???</p>
				<button onClick={closeModal}>No</button>
				<button onClick={deleteCreator}>Yes</button>
			</Modal>
		</div>
	);
};

export default EditCreator;
