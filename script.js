function createTable() {
    //Write your code here
	let table = document.getElementById("myTable");
	let rows = prompt("Input number of rows");
	let cols = prompt("Input number of columns");
	if(rows != null && cols != null){
		for(let i = 0; i < rows; i++){
			let row = document.createElement("tr");
			for(let j = 0; j < cols; j++){
				let cell = document.createElement("td");
				cell.innerHTML = `Row-${i} Column-${j}`;
				row.appendChild(cell);
			}
			table.appendChild(row);
		}
	}
	
  
}
