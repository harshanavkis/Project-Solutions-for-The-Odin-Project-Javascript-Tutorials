let myLibrary = []

function Book(title, author, numPages, read) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	flag = true;
	while(flag){
		if(read.toLowerCase() == "no"){
		this.read = false;
		flag = false;
		break;
	}
		if(read.toLowerCase() == "yes"){
		this.read = true;
		flag = false;
		break;
	}

	read = prompt('Please Enter yes or no for read field!!');
	}
}

function addBookToLibrary(book){
	myLibrary.push(book.title);
	localStorage.setItem(book.title, JSON.stringify(book));
}

var add = document.getElementById('AddButton');
var clear = document.getElementById('ClearButton');
var cancel = document.getElementById('CancelButton');

cancel.onclick = function(){
	window.location.href = "index.html";
}

add.onclick = function(){
	var title = document.getElementById('title').value;
	var author = document.getElementById('author').value;
	var numPages = document.getElementById('nop').value;
	var read = document.getElementById('read').value;
	var book = new Book(title, author, numPages, read);
	addBookToLibrary(book);
	document.getElementById('title').value = "";
	document.getElementById('author').value = "";
	document.getElementById('nop').value = "";
	document.getElementById('read').value = "";
	console.log(book)
}

clear.onclick = function(){
	document.getElementById('title').value = "";
	document.getElementById('author').value = "";
	document.getElementById('nop').value = "";
	document.getElementById('read').value = "";
}


