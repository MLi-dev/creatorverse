import React, { useState } from "react";
import { supabase } from "../client";

const AddCreator = () => {
	const [creator, setCreator] = useState({
		name: "",
		youtube: "",
		twitter: "",
		instagram: "",
		description: "",
		imageURL: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCreator((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const addCreator = async (event) => {
		event.preventDefault();

		const { error } = await supabase
			.from("creators")
			.insert({
				name: creator.name,
				youtube: creator.youtube,
				twitter: creator.twitter,
				instagram: creator.instagram,
				description: creator.description,
				imageURL: creator.imageURL,
			})
			.select();

		if (error) {
			console.log(error);
		}

		window.location = "/";
	};

	return (
		<div className='AddEditCreator'>
			<form id='addCreatorForm'>
				<label>Name</label>
				<input
					type='text'
					id='name'
					name='name'
					value={creator.name}
					onChange={handleChange}
					required
				/>

				<label>Image</label>
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

				<button type='submit' onClick={addCreator}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddCreator;
