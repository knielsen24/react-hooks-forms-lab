import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchBar, setSearchBar] = useState("")
	const [submittedData, setSubmittedData] = useState(items)

	const onItemFormSubmit = (newItem) => {
		const newItemArray = [...items, newItem]
		setSubmittedData(newItemArray)
	}

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value);
	}

	function onSearchChange(event) {
		setSearchBar(event.target.value.toLowerCase())
	}

	const itemsToDisplay = submittedData.filter((item) => {
		const searchName = item.name.toLowerCase().includes(searchBar)
		if (selectedCategory === "All" && searchBar === "") return true
		else if (selectedCategory === "All" && searchBar === searchBar) return searchName
		else if (item.category === selectedCategory) return searchName
	});

	return (
		<div className="ShoppingList">
			<ItemForm onItemFormSubmit={onItemFormSubmit} />
			<Filter
				onCategoryChange={handleCategoryChange}
				onSearchChange={onSearchChange}
				search={searchBar}
			/>
			<ul className="Items">
				{itemsToDisplay.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList