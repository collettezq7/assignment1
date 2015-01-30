//Header Code

var myHeader = document.querySelector("body header");

var h1Element = document.createElement("h1");
	h1Element.setAttribute("class", "h1Header");
	h1Element.textContent = "Colleen (Soon-to-be) Frazer";
	var text = h1Element.textContent;
	myHeader.appendChild(h1Element);

var pElement = document.createElement("p");
	pElement.setAttribute("class", "pHeader");
	pElement.textContent = "Web Developer and Graphic Designer";
	var text = pElement.textContent;


var section = document.createElement("nav");
var nav = document.createElement("nav");
var ul = document.createElement("ul");

var li = document.createElement("li");
var a = document.createElement("a");
  a.setAttribute('href','index.html');
  //li.classList.add("current");
  a.textContent = "Home";
  ul.appendChild(li);
  li.appendChild(a);

var li2 = document.createElement("li");
var a2 = document.createElement("a");
  a2.setAttribute('href','resume.html');
  a2.textContent = "Resume";
  ul.appendChild(li2);
  li2.appendChild(a2);

var li3 = document.createElement("li");
var a3 = document.createElement("a");
  a3.setAttribute('href','blog.html');
  a3.textContent = "Blog";
  ul.appendChild(li3);
  li3.appendChild(a3);
myHeader.appendChild(pElement);

//Footer Code

var myFooter = document.querySelector("body footer");

var pElement = document.createElement("p");
	pElement.setAttribute("class", "pFooter");
	pElement.textContent = "©Copyright Colleen Smith";
	var text = pElement.textContent;
	myFooter.appendChild(pElement);
	



// Show and Hide Skills

var button = document.querySelector("button");
var isVisible = true;

button.addEventListener("click", function (evt) {
		console.log("clicked");
	
		if (isVisible) {
			skills.classList.add("hidden");
			button.textContent = "Show Skills";
			isVisible = false;
		}
		else {
			skills.classList.remove("hidden");
			button.textContent = "Hide Skills";
			isVisible = true;
		}
}
)

// Show and Hide Work

var button2 = document.querySelector("button.work");
var isVisible = true;

button2.addEventListener("click", function (evt) {
		console.log("clicked");
	
		if (isVisible) {
			work.classList.add("hidden");
			button2.textContent = "Show Work Experience";
			isVisible = false;
		}
		else {
			work.classList.remove("hidden");
			button2.textContent = "Hide Work Experience";
			isVisible = true;
		}
}
)


// Show and Hide Education

var button3 = document.querySelector("button.education");
var isVisible = true;

button3.addEventListener("click", function (evt) {
		console.log("clicked");
	
		if (isVisible) {
			education.classList.add("hidden");
			button3.textContent = "Show Education";
			isVisible = false;
		}
		else {
			education.classList.remove("hidden");
			button3.textContent = "Hide Education";
			isVisible = true;
		}
}
)


