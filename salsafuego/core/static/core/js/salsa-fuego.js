document.addEventListener('DOMContentLoaded', () => {

	// Add "active" class to #page_name element
		const current_page = document.querySelector('#' + page_name).classList.add("current-page");

	// Define tornPaperSvg variable and assign to an empty array
		var tornPaperSvg = [];
		// console.log('tornPaperSvg:');
		// console.log(tornPaperSvg);

	// Define tornPaperBackgroundImage variable and assign to an empty array
		var tornPaperBackgroundImage = [];
		// console.log('tornPaperBackgroundImage:');
		// console.log(tornPaperBackgroundImage);

	// Add background colors to .width-100 divs
		backgroundColors()

	// Create torn paper effect
		tearPaper()

	// Call sizeDiv() function
		sizeDiv()

	// Call accordionMenu() function
		accordionMenu()

});

window.addEventListener('resize', () => {

	// Call retearPaper() function
		retearPaper()

	// Call sizeDiv() function
		sizeDiv()

});

// Add background colors to .width-100 divs
function backgroundColors() {
	// Add all <section class="width-100"> elements to fullWidthSections
	let fullWidthSections = document.querySelectorAll('section.width-100');

	// Loop through fullWidthSections and {{do stuff...}}
	for (i = 0; i < fullWidthSections.length; i++) {

		if (i % 4 == 0) {
			fullWidthSections[i].style.backgroundColor = '#c5342f';
		}
		else if (i % 4 == 1) {
			fullWidthSections[i].style.backgroundColor = '#f47b3d';
		}
		else if (i % 4 == 2) {
			fullWidthSections[i].style.backgroundColor = '#5b9d7a';
		}
		else {
			fullWidthSections[i].style.backgroundColor = '#ffc63e';
		}
	}
}

// Create torn paper effect
function tearPaper() {

	// Add all <svg class="torn-paper-svg"> elements to tornPaperSvg
		tornPaperSvg = document.querySelectorAll('.torn-paper-svg');
		// console.log('tornPaperSvg:');
		// console.log(tornPaperSvg);

	// Loop through tornPaperSvg and {{do stuff...}}
		for (i = 0; i < tornPaperSvg.length; i++) {

			// Use the .getBoundingClientRect() method  to return the size of tornPaperSvg[i].parentNode and its position relative to the viewport (left, top, right, bottom, x, y, width, and height properties)
				var rect = tornPaperSvg[i].parentNode.getBoundingClientRect();
				var rectWidth = rect.width;
				// console.log('rectWidth:');
				// console.log(rectWidth);
				var rectHeight = rect.height;
				// console.log('rectHeight:');
				// console.log(rectHeight);

			// Assign value of rectWidth to svgWidth
				var svgWidth = rectWidth;
				// console.log('svgWidth:');
				// console.log(svgWidth);

			// Assign value of (rectWidth * 0.045) to svgHeight
				var svgHeight = (rectWidth * 0.045);
				// console.log('svgHeight:');
				// console.log(svgHeight);

			// Assign value of svgWidth to tornPaperSvg[i] as width attribute
				tornPaperSvg[i].style.width = (svgWidth + 'px');
				// console.log('tornPaperSvg[' + i + '].width:');
				// console.log(tornPaperSvg[i].style.width);

			// Assign value of svgHeight to tornPaperSvg[i] as height attribute
				tornPaperSvg[i].style.height = (svgHeight + 'px');
				// console.log('tornPaperSvg[' + i + '] =.height:');
				// console.log(tornPaperSvg[i].style.height);

			// Define svgCoordinates variable and assign to an array with first X Y coordinates set to "0 0"
				var svgCoordinates = ["0 0"];
				// console.log('svgCoordinates:');
				// console.log(svgCoordinates);

			// Define lastX variable and assign value of 0
				var lastX = 0;
				// console.log('lastX:');
				// console.log(lastX);

			// Define lastY variable and assign value of 0
				var lastY = 0;
				// console.log('lastY:');
				// console.log(lastY);

			// Use Math.floor() and Math.random() methods to define new X Y coordinates and add to svgCoordinates array
				if (svgWidth >= 1024) {
					while (lastX <= svgWidth) {
						var randX = Math.floor((Math.random() * 40) + 30);
						var randY = Math.floor((Math.random() * 15) + 10);
						svgCoordinates.push(randX + lastX + ' ' + randY);
						lastX = lastX + randX;
					}
				} else if (svgWidth >= 768) {
					while (lastX <= svgWidth) {
						var randX = Math.floor((Math.random() * 35) + 26.25);
						var randY = Math.floor((Math.random() * 13.5) + 9);
						svgCoordinates.push(randX + lastX + ' ' + randY);
						lastX = lastX + randX;
					}
				} else if (svgWidth >= 425) {
					while (lastX <= svgWidth) {
						var randX = Math.floor((Math.random() * 30) + 22.5);
						var randY = Math.floor((Math.random() * 12) + 8);
						svgCoordinates.push(randX + lastX + ' ' + randY);
						lastX = lastX + randX;
					}
				} else if (svgWidth >= 375) {
					while (lastX <= svgWidth) {
						var randX = Math.floor((Math.random() * 25) + 18.75);
						var randY = Math.floor((Math.random() * 9) + 6);
						svgCoordinates.push(randX + lastX + ' ' + randY);
						lastX = lastX + randX;
					}
				} else {
					while (lastX <= svgWidth) {
						var randX = Math.floor((Math.random() * 20) + 15);
						var randY = Math.floor((Math.random() * 6) + 4);
						svgCoordinates.push(randX + lastX + ' ' + randY);
						lastX = lastX + randX;
					}
				}
				// console.log('svgCoordinates:');
				// console.log(svgCoordinates);

			// Remove the last value of svgCoordinates array
				svgCoordinates.pop();
				// console.log('svgCoordinates:');
				// console.log(svgCoordinates);

			// Add new value to the end of svgCoordinates array
				// X coordinate is equal to value of svgWidth
				// Y coordinate is equal to 0
				svgCoordinates.push(svgWidth + " 0");
				// console.log('svgCoordinates:');
				// console.log(svgCoordinates);

			// Use Snap.svg JavaScript library to create new drawing surface out of tornPaperSvg[i]
				var svg = Snap(tornPaperSvg[i]);

			// Draw a polygon using the X Y coordinates from the svgCoordinates array and define a fill color
				let tornPaperModulo = i % 4;
				if (tornPaperModulo == 0) {
					var tornPaperFill = svg.polygon(svgCoordinates).attr({
						fill: '#c5342f'
					});
				}
				else if (tornPaperModulo == 1) {
					var tornPaperFill = svg.polygon(svgCoordinates).attr({
						fill: '#f47b3d'
					});
				}
				else if (tornPaperModulo == 2) {
					var tornPaperFill = svg.polygon(svgCoordinates).attr({
						fill: '#5b9d7a'
					});
				}
				else {
					var tornPaperFill = svg.polygon(svgCoordinates).attr({
						fill: '#ffc63e'
					});
				}

			// Use the backgroundColor property to set the background color of tornPaperSvg[i]
				if (i == tornPaperSvg.length - 1) {
					tornPaperSvg[i].style.backgroundColor = '#f2dfc3'
				}
				else if (tornPaperModulo == 0) {
						tornPaperSvg[i].style.backgroundColor = '#f47b3d'
					}
				else if (tornPaperModulo == 1) {
					tornPaperSvg[i].style.backgroundColor = '#5b9d7a'
				}
				else if (tornPaperModulo == 2) {
					tornPaperSvg[i].style.backgroundColor = '#ffc63e'
				}
				else {
					tornPaperSvg[i].style.backgroundColor = '#c5342f'
				}

		}

}

// Recreate torn paper effect
function retearPaper() {

	// Loop through tornPaperSvg and {{do stuff...}}
		for (i = 0; i < tornPaperSvg.length; i++) {

			// Return child nodes of tornPaperSvg[i]
				var childNodesList = tornPaperSvg[i].childNodes;
				// console.log('childNodesList:');
				// console.log(childNodesList);

			// Convert childNodes into an array
				var childNodesArray = Array.from(childNodesList);
				// console.log('childNodesArray:');
				// console.log(childNodesArray);

			// Define tagNamesArray variable and assign to empty array
				var tagNamesArray = [];

			// Define getTagNames(value) function
				function getTagNames(value) {

					// Determine the tagName of value argument and add to tagNamesArray
					tagNamesArray.push(value.tagName);

				}

			// Use the .forEach() method to call getTagNames function once for each element in childNodesArray array
				childNodesArray.forEach(getTagNames);

			// Define polygonPosition variable and use .indexOf() method to search tagNamesArray for the specified item and return its position
				// NOTE: The .indexOf() method returns -1 if the value is not found
				var polygonPosition = tagNamesArray.indexOf('polygon');
				// console.log('polygonPosition:');
				// console.log(polygonPosition);

			// Return data from childNodesArray[polygonPosition] to access <polygon> element
				var polygonElement = childNodesArray[polygonPosition];
				// console.log('polygonElement:');
				// console.log(polygonElement);

			// Use the .getAttribute() method to return value of the points attribute
				var pointsAttribute = polygonElement.getAttribute('points');
				// console.log('pointsAttribute:');
				// console.log(pointsAttribute);

			// Use the .split() method to convert the pointsAttribute string into an array
				var pointsArray = pointsAttribute.split(',');
				// console.log('pointsArray:');
				// console.log(pointsArray);

			// Define lastElement variable and assign to empty array
				var lastElement = [];
				// console.log('lastElement:');
				// console.log(lastElement);

			// Use .push() method to add last element of pointsArray to lastElement
				lastElement.push(pointsArray[pointsArray.length - 1]);
				// console.log('lastElement:');
				// console.log(lastElement);

					// Regex to extract characters before blank space
						//NOTE: The returned value will be a string and needs to be converted into an integer
						var xString = lastElement[0].substr(0,lastElement[0].indexOf(' '));
						// console.log('xString:');
						// console.log(xString);

					// Convert xString to an integer
						var xInt = parseInt(xString);
						// console.log('xInt:');
						// console.log(xInt);

			// Define oldSvgWidth variable and assign to value of xInt
				var oldSvgWidth = xInt;
				// console.log('oldSvgWidth:');
				// console.log(oldSvgWidth);

			// Use the .getBoundingClientRect() method  to return the size of tornPaperSvg[i].parentNode and its position relative to the viewport (left, top, right, bottom, x, y, width, and height properties)
				var newRect = tornPaperSvg[i].parentNode.getBoundingClientRect();
				var newRectWidth = newRect.width;
				// console.log('newRectWidth:');
				// console.log(newRectWidth);
				var newRectHeight = newRect.height;
				// console.log('newRectHeight:');
				// console.log(newRectHeight);

			// Assign value of newRectWidth to newSvgWidth
				var newSvgWidth = newRectWidth;
				// console.log('newSvgWidth:');
				// console.log(newSvgWidth);

			// Assign value of (newRectWidth * 0.045) to newSvgHeight
				var newSvgHeight = (newRectWidth * 0.045);
				// console.log('newSvgHeight:');
				// console.log(newSvgHeight);

			// Assign value of newSvgWidth to tornPaperSvg[i] as width attribute
				tornPaperSvg[i].style.width = (newSvgWidth + 'px');
				// console.log('tornPaperSvg[' + i + '].width:');
				// console.log(tornPaperSvg[i].style.width);

			// Assign value of newSvgHeight to tornPaperSvg[i] as height attribute
				tornPaperSvg[i].style.height = (newSvgHeight + 'px');
				// console.log('tornPaperSvg[' + i + '].height:');
				// console.log(tornPaperSvg[i].style.height);

			// Define svgRatios variable and assign to empty array
				var svgRatios = [];
				// console.log('svgRatios:');
				// console.log(svgRatios);

			// Loop through pointsArray and calculate ratios for X and Y Coordinates
				for (j = 0; j < pointsArray.length; j++) {

					// Regex to extract characters before blank space
						var xString = pointsArray[j].substr(0,pointsArray[j].indexOf(' '));
						// console.log('xString:');
						// console.log(xString);

					// Regex to extract characters after blank space
						var yString = pointsArray[j].substr(pointsArray[j].indexOf(' ')+1);
						// console.log('yString:');
						// console.log(yString);

					// Convert xString to a float
						var xFloat = parseFloat(xString);
						// console.log('xFloat:');
						// console.log(xFloat);

					// Convert yString to a float
						var yFloat = parseFloat(yString);
						// console.log('yFloat:');
						// console.log(yFloat);

					// Calculate ratio of xFloat / oldSvgWidth
						var xRatio = (xFloat / oldSvgWidth);
						// console.log('xRatio:');
						// console.log(xRatio);

					// Calculate ration of yFloat / (oldSvgWidth * 0.045)
						var yRatio = (yFloat / (oldSvgWidth * 0.045));
						// console.log('yRatio:');
						// console.log(yRatio);

					// Add xRatio and yRatio values to svgRatios array
						svgRatios.push(xRatio + ' ' + yRatio);
						// console.log('svgRatios:');
						// console.log(svgRatios);

				}
				// console.log('svgRatios:');
				// console.log(svgRatios);

			// Empty the contents of tornPaperSvg[i]
				while (tornPaperSvg[i].hasChildNodes()) {
					tornPaperSvg[i].removeChild(tornPaperSvg[i].firstChild);
				}
				// console.log('tornPaperSvg[' + i + '].childNodes:');
				// console.log(tornPaperSvg[i].childNodes);

			// Define newSVGCoordinates variable and assign to empty array
				var newSVGCoordinates = [];
				// console.log('newSVGCoordinates:');
				// console.log(newSVGCoordinates);

			// Loop through svgRatios array and caculate new X and Y Coordinates relative to newSvgWidth and newSvgHeight
				for (k = 0; k < svgRatios.length; k++) {

					// Regex to extract characters before blank space
						var xString = svgRatios[k].substr(0, svgRatios[k].indexOf(' '));
						// console.log('xString:');
						// console.log(xString);

					// Regex to extract characters after blank space
						var yString = svgRatios[k].substr(svgRatios[k].indexOf(' ') + 1);
						// console.log('yString:');
						// console.log(yString);

					// Convert xString to a float
						var xFloat = parseFloat(xString);
						// console.log('xFloat:');
						// console.log(xFloat);

					// Convert yString to a float
						var yFloat = parseFloat(yString);
						// console.log('yFloat:');
						// console.log(yFloat);

					// Calculate new xCoordinate value
						var xCoordinate = (xFloat * newSvgWidth);
						// console.log('xCoordinate:');
						// console.log(xCoordinate);

					// Calculate new yCoordinate value
						var yCoordinate = (yFloat * newSvgHeight);
						// console.log('yCoordinate:');
						// console.log(yCoordinate);

					// Add xCoordinate and yCoordinate values to newSVGCoordinates array
						newSVGCoordinates.push(xCoordinate + ' ' + yCoordinate);
						// console.log('newSVGCoordinates:');
						// console.log(newSVGCoordinates);

				}
				// console.log('newSVGCoordinates:');
				// console.log(newSVGCoordinates);

			// Use Snap.svg JavaScript library to create new drawing surface out of tornPaperSvg[i]
				var svg = Snap(tornPaperSvg[i]);

			// Draw a polygon using the X Y coordinates from the newSVGCoordinates array and define a fill color
				let tornPaperModulo = i % 4;
				if (tornPaperModulo == 0) {
					var tornPaperFill = svg.polygon(newSVGCoordinates).attr({
						fill: '#c5342f'
					});
				}
				else if (tornPaperModulo == 1) {
					var tornPaperFill = svg.polygon(newSVGCoordinates).attr({
						fill: '#f47b3d'
					});
				}
				else if (tornPaperModulo == 2) {
					var tornPaperFill = svg.polygon(newSVGCoordinates).attr({
						fill: '#5b9d7a'
					});
				}
				else {
					var tornPaperFill = svg.polygon(newSVGCoordinates).attr({
						fill: '#ffc63e'
					});
				}

		}

}

// I can't remember what this was for...?
function sizeDiv() {

	// Add all .torn-paper-background-image elements to tornPaperBackgroundImage
	tornPaperBackgroundImage = document.querySelectorAll('.torn-paper-background-image');

	// Loop through tornPaperBackgroundImage and do stuff...
	for (i = 0; i < tornPaperBackgroundImage.length; i++) {
		// Use the The Window.getComputedStyle() method to return an object that reports the values of all CSS properties of tornPaperBackgroundImage[i]
		var computedStyleObject = window.getComputedStyle(tornPaperBackgroundImage[i], null);

		// Access the 'backgroundImage' property from the computedStyleObject object
		var backgroundImageProperty = computedStyleObject['backgroundImage'];

		// Define extractUrlRegEx and assign to regular expression that extracts urls from all possible declaration formats
		var extractUrlRegEx = /(?:\(['"]?)(.*?)(?:['"]?\))/;

		// Define extractUrl execute extractUrlRegEx on (backgroundImageProperty)[1]
		// NOTE: This method returns the matched text if it finds a match, otherwise it returns null
		var extractUrl = extractUrlRegEx.exec(backgroundImageProperty)[1];

		// Define newImage and use the Image() constructor to create a new HTMLImageElement instance
		var newImage = new Image();

		// Use value of extractUrl to define src of newImage
		newImage.src = extractUrl;

		// Define newImageNaturalWidth variable and assign value of newImage.naturalWidth
		var newImageNaturalWidth =  newImage.naturalWidth;

		// Define newImageNaturalHeight variable and assign value of newImage.naturalHeight
		var newImageNaturalHeight =  newImage.naturalHeight;

		// Define newImageHeightToWidth variable and assign value of newImageNaturalHeight / newImageNaturalWidth
		var newImageHeightToWidth = newImageNaturalHeight / newImageNaturalWidth;

		// Use the .getBoundingClientRect() method to return the size of tornPaperBackgroundImage[i] and its position relative to the viewport (left, top, right, bottom, x, y, width, and height properties)
		var rect = tornPaperBackgroundImage[i].getBoundingClientRect();
		var rectWidth = rect.width;

		// Define calculatedHeight variable and assign value of newImageHeightToWidth * rectWidth
		var calculatedHeight = newImageHeightToWidth * rectWidth;

		// Assign value of calculatedHeight to tornPaperBackgroundImage[i].style.height
		tornPaperBackgroundImage[i].style.height = (calculatedHeight + 'px');
	}

}

// Accordion JavaScript
function accordionMenu() {

	// Creat node list of all .panel-header elements
	var panelHeader = document.querySelectorAll('.panel-header');

	// Loop through node list and add accordion menu functionality
	for (i = 0; i < panelHeader.length; i++) {
		// Add click event listener that calls an anonymous function
		panelHeader[i].addEventListener('click', function() {
			// Use the toggle() method to add or remove .active class
			this.classList.toggle('current_panel');

			// Assign the next element sibling to a new variable
			var panelContent = this.nextElementSibling;

			// Collapse the accorion panel if open
			if (panelContent.style.maxHeight) {
				panelContent.style.maxHeight = null;
			}
			// Expand the accordion panel if closed
			else {
				panelContent.style.maxHeight = '200px';
			}
		});
	}

}
