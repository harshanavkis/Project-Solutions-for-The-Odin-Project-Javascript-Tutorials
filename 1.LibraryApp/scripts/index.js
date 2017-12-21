var bl = document.getElementById('bookList');

for(var i=0; i<localStorage.length - 1; i++){
	var s = JSON.parse(localStorage.getItem(localStorage.key(i)));
	var newbl = document.createElement('div');
	newbl.textContent = s['title'];
	newbl.id = s['title'];
	newbl.classList.add('tile');
	var mainParent = document.getElementById("bookList");
	// var mainParent = document.getElementById("myLib").parentNode;
	// var sp2 = document.getElementById("myLib");
	mainParent.insertBefore(newbl,null);

	author = document.createElement('li');
	author.textContent = s['author'];
	author.classList.add('author');
	newbl.insertBefore(author,null);

	numPages = document.createElement('li');
	numPages.textContent = s['numPages']+" pages";
	numPages.classList.add('numPages');
	newbl.insertBefore(numPages,null);

	read = document.createElement('li');
	read.textContent = s['read'];
	read.classList.add("read");
	newbl.insertBefore(read,null);

	// var br = document.createElement('br');
	// mainParent.insertBefore(br, sp2);
}


