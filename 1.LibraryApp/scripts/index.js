var bl = document.getElementById('bookList');

for(var i=0; i<localStorage.length - 1; i++){
	var s = JSON.parse(localStorage.getItem(localStorage.key(i)));
	var newbl = document.createElement('span');
	newbl.textContent = s['title']
	var parent = document.getElementById("myLib").parentNode;
	var sp2 = document.getElementById("myLib");
	parent.insertBefore(newbl,sp2);
	var br = document.createElement('br');
	parent.insertBefore(br, sp2);
}


