$(document).ready(function() {
	const addInventoryButton = $('#addInventoryButton');
	const inventoryBody = $('#inventoryBody');
	console.log(inventoryBody);

	let tableRow;
	let clientCode;
	let itemCode;
	let itemDesc;
	let dateCreated;
	let quantity;

	function createTableElement() {
		tableRow = $("<tr></tr>");
		clientCode = $("<td></td>");
		itemCode = $("<td></td>");
		itemDesc = $("<td></td>");
		dateCreated = $("<td></td>");
		quantity = $("<td></td>");
		
		let action = $("<td></td>");
		let deleteButton = $('<button type="button" class="btn btn-danger"></button>').text('Delete');
		deleteButton.css("margin-right", "5px");
		let editInventoryBtn = $('<button type="button" class="btn btn-info"></button>').text('Edit');
		
		tableRow.append(clientCode, itemCode, itemDesc, dateCreated, quantity, action);
		action.append(deleteButton, editInventoryBtn);
		inventoryBody.append(tableRow);
	}

	function displayInventoryTable() {
		let inventoryItemCode = $('#inventoryItemCode');
		let inventoryItemDesc = $('#inventoryItemDesc');
		let inventoryItemQuantity = $('#inventoryItemQuantity');
		let addItemButton = $('#addItemButton');

		var d = new Date();
		var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
		
		addItemButton.click(function() {
			console.log('Clicked');
			clientCode.html('001');
			itemCode.html(inventoryItemCode.val());
			itemDesc.html(inventoryItemDesc.val());
			dateCreated.html(strDate);
			quantity.html(inventoryItemQuantity.val());
			$('#inventoryModal').modal('hide');
		});
	}

	displayInventoryTable();

	addInventoryButton.click(function() {
		$('#inventoryModal').modal('show');
		createTableElement();
	});
});
