#Alfred Workflow Feedback XML Generation

This is to help workflow developers to fast generate formatted XML which outputs to Alfred feedback.

##Python
Library: Feedback.py  
Author: Peter Okma  
Source :[https://github.com/peteokma/alfred-workflows](https://github.com/peteokma/alfred-workflows)  
Modifier: Ruoran Liu

`python sample.ph`

```python
from Feedback import Feedback
fb = Feedback()
fb.add_item(title="Title", subtitle="Item description", arg="Value return to workflow", valid="yes", autocomplete="Description", icon="public.jpeg", filetype="file", icontype="filetype")
print fb
```

##PHP
Library: workflows.php  
Author: David Ferguson  
Source: [http://dferg.us/workflows-class/](http://dferg.us/workflows-class/)

`php -f sample.php`

Initilization  
```php
include_once('workflows.php');
$w = new Workflows();
```
Using result
```php
$w->result('itemuid', 'itemarg', 'Some Item Title', 'Some item subtitle', 'icon.png', 'yes', 'autocomplete');
echo $w->toxml();
```

Using array
```php
$results = array();
$temp = array(
'uid' => 'itemuid',
'arg' => 'itemarg',
'title' => 'Some Item Title',
'subtitle' => 'Some item subtitle',
'icon' => 'icon.png',
'valid' => 'yes',
'autocomplete' => 'autocomplete'
);
array_push( $results, $temp );
echo $w->toxml( $results );
```

##Nodejs
Library: Feedback.js   
Author: Qiu Wang   
Blog: [http://ishouldbeageek.me](http://ishouldbeageek.me)

`node sample.js`

Initialzation
```javascript
var feedback = new Feedback();
feedback.addItem({ 
  uid : 'youruid', 
  arg : 'yourarg', 
  title : 'yourtitle',
  subtitle : 'your subtitle',
  icon : {
    type : 'youricontype',
    value : 'youricon'
  }
});

var feedback2 = new Feedback({ 
  uid : 'youruid', 
  arg : 'yourarg', 
  title : 'yourtitle',
  subtitle : 'your subtitle',
  icon : {
    type : 'youricontype',
    value : 'youricon'
  }
});

var feedback3 = new Feedback([/* item, item2 */]);

console.log(feedback.toString());
console.log(feedback2.toString());
console.log(feedback3.toString());
```

---
##Reference
XML format explained: [http://www.alfredforum.com/topic/5-generating-feedback-in-workflows/](http://www.alfredforum.com/topic/5-generating-feedback-in-workflows/)
