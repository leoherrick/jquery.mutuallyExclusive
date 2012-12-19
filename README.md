#jquery.mutuallyExclusive

This plugin can be applied to a set of dropdown menus on a single page. When applied to a list of dropdowns, it keeps track of which items in the selects have been chosen, and removes any value that has already been selected from each of the other dropdowns on the page. 

For example, say you have a form that has two dropdown menus, each containing a list of colors. If an option with the value "blue" is slected in the first menu, the option with value "blue" would it would be *removed* from the second one. If "blue" is subsequently unslected, it will be *added back*.

## Usage

To use, select the group of select boxes, and call the method directly on it. 

#### sample markup

```HTML
<select class="colors">
    <option value="">--Select Your Favorite Color--</option>
    <option value="red">Red</option>
    <option value="white">White</option>
    <option value="blue">Blue</option> 
</select>

<select class="colors">
    <option value="">--Select Your Favorite Color--</option>
    <option value="red">Red</option>
    <option value="white">White</option>
    <option value="blue">Blue</option> 
</select>
```

#### sample javascript

```Javascript
$("select.colors").mutuallyExclusive();
```

#### An example on JSFiddle
check out how it works on JSFiddle:
http://jsfiddle.net/NH874/7/



