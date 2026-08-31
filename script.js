function firstChar(text) {
  // your code here

	firstText=text.trim();
	return firstText.charAt(0);
}
// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));