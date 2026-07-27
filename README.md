# javascript-learning

DOM MANIPULATION FOR HTML
/* Example Explained
document is the HTML document.

getElementById() is a document method.

myPara = getElementById("demo") retrieves the "demo" element.

innerHTML is an element property.

myPara.innerHTML = "Hello World!" changes the property. */

/* Selecting HTML Elements
Method	Description
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
document.querySelector(selector)	Find the first element that matches a CSS selector
document.querySelectorAll(selector)	Find all elements that match a CSS selector */

/* Accessing Element Content
Property	Description
element.innerHTML:	The HTML content of an element
element.textContent: The text content of an element

Accessing Element Attributes
Property	Description
element.attribute: Change the attribute value of an HTML element
element.style.property:	The style of an HTML element
Changing Element Attributes
Method	Description
element.setAttribute():	Create or set a new attribute
Manipulating Structure
Method	Description
document.createElement():	Creates a new HTML element
document.removeChild():	Remove an HTML element
document.appendChild():	Add an HTML element
document.replaceChild():	Replace an HTML element
Adding Event Handlers
Method	Description
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
