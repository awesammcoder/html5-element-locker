# ElementLocker

## Description
> Description: Lock your HTML5 elements, don't let your client/users to change your elements' attributes. To add more security in your mobile and web applications. Specially in your AJAX requests.

## Installation
> Link ElementLocker library in your project.
```javascript
<script src="/ElementLocker.js" ></script>
```

## Usage
> * Initialize your target element 
> * The first parameter will be the target element
> * The third parameter is an array that contains the list of your target's attributes to lock.

```javascript
//Get your target element
var e = document.getElementById('username');

//Initialize your element
//new ElementLocker(element, array(['list', 'of', 'elements attributes']));
var username_element = new ElementLocker(e, ['type', 'id', 'name', 'placeholder']);

//Lock the elements attributes
username_element.lock();
```

