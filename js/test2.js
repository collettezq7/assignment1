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

