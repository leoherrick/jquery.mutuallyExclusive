#jquery.mutuallyExclusive

This plugin can be applied to sets of identical dropdown menus on a page. When applied, it keeps track of which items have been chosen and removes those items from other dropdowns on the page. 

For example, say you have a form with two identical menus, each containing a list of colors. If an option with the value "blue" is slected in the first menu, the option with value "blue" would it would be *removed* from the second one. If "blue" is subsequently unslected, it will be *added back*.

## Usage

To use, select the group of select boxes, and call the method on it. 

#### sample markup:

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

#### sample javascript:

```Javascript
$("select.colors").mutuallyExclusive();
```

#### an example on JSFiddle:
check out how it works on JSFiddle:
http://jsfiddle.net/NH874/15/




[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/leoherrick/jquery.mutuallyexclusive/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

