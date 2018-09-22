# Simple popup

This popup is developed for University of Economics Varna - Course project
It is not for Production use
## Installation
1. From the ./dist folder include *js/popup-js.bundle.js* and *css/popup-styles.bundle.css*

## Usage
To ini the popup use
```javascript
let simplePopup = new SimplePopup(templatePath, templateVariables, overlay);
```
STRING : *templatePath* - example: './popup.html'
this is a html file that will be loaded and rendered

Object : *templateVariables* - example 
```javascript
let templateVariables = {
  TITLE: "Dev Web",
  CONTENT: "Lorem ipsum"
};
```
templateVariables are used to replace the dummy variables inside the template
To indicate a dummy variable inside a template use |::|VARIABLE_NAME|::|
see ./popup.html for example

To add predefined behaviour to the template use data attribute *data-bi-trigger=METHOD_NAME*
Currently predefined behaviours are :
data-bi-trigger=close -- closes the modal

API functions
.addHandle(behaviourName, behaviourCallback)
```javascript
simplePopup.addHandle('logSomething', function(){
  console.log("Does something here");
});
```
.make() - creates dom element withouth showing it to the user, always invoke *make* at least once before .render();

.render() - renders the created popup to the user;


### Full integration
```javascript
let popup = new SimplePopup('./popup.html', {TITLE:"Web Dev", CONTENT:"Lorem ipsum dolor sit amet"});
    popup.make();
    popup.render();
```
