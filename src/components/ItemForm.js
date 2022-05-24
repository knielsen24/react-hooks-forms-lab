import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

	const [formData, setFormData] = useState({
		id: "",
		name: "",
		category: "",
	})

	const handleChange = (e) => {
		const newData = { ...formData, [e.target.name]: e.target.value, }
		setFormData(newData)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newItem = {
			id: uuid(),
			name: formData.name,
			category: formData.category,
		}
		onItemFormSubmit(newItem)
	}

	return (
		<form className="NewItem" onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					onChange={handleChange}
					name="name"
					type="text"
					value={formData.name} />
			</label>

			<label>
				Category:
				<select
					value={formData.category}
					onChange={handleChange}
					name="category"
				>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</label>

			<button type="submit" >Add to List</button>
		</form>
	);
}

export default ItemForm;
