#Alfred Workflow Feedback XML Generation

This is to help workflow developers to fast generate formatted XML which outputs to Alfred feedback.

##Python
Library: Feedback.py  
Author: Peter Okma  
Source :[https://github.com/peteokma/alfred-workflows](https://github.com/peteokma/alfred-workflows)  
Modifier: Ruoran Liu

`python sample.ph`

Import  
```python
from Feedback import Feedback
```

Initialization  
```python
fb = Feedback()
```

Adding item  
```python
fb.add_item(title="Title", subtitle="Item description", arg="Value return to workflow", valid="yes", autocomplete="Description", icon="public.jpeg", filetype="file", icontype="filetype")
```

Outputting XML  
```python
print fb
```

##PHP
Library: workflows.php  
Author: David Ferguson  
Source: [http://dferg.us/workflows-class/](http://dferg.us/workflows-class/)

`php -f sample.php`

Import  
```php
include_once('workflows.php');
```

Initialization  
```php
$w = new Workflows();
```

Adding item (using result)  
```php
$w->result('itemuid', 'itemarg', 'Some Item Title', 'Some item subtitle', 'icon.png', 'yes', 'autocomplete');
```

Outputting XML (using result)  
```php
echo $w->toxml();
```

Adding item (using array)  
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
array_push($results, $temp);
```

Outputting XML (using array)  
```php
echo $w->toxml($results);
```

##Nodejs
Library: Feedback.js  
Author: Qiu Wang  
Blog: [http://ishouldbeageek.me](http://ishouldbeageek.me)

`node sample.js`

Import  
```javascript
var Feedback = require('./Feedback');
```

Initialization & adding item (using function)  
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
```

Initialization & adding item (using constructor)  
```javascript
var feedback = new Feedback({ 
  uid : 'youruid', 
  arg : 'yourarg', 
  title : 'yourtitle',
  subtitle : 'your subtitle',
  icon : {
    type : 'youricontype',
    value : 'youricon'
  }
});
```

Initialization & adding item (using array)  
```javascript
item = { 
  uid : 'youruid', 
  arg : 'yourarg', 
  title : 'yourtitle',
  subtitle : 'your subtitle',
  icon : {
    type : 'youricontype',
    value : 'youricon'
  }
}
var feedback = new Feedback([item/*, item2 */]);
```

Outputting XML  
```javascript
console.log(feedback.toString());
```

##Shell
Library: feedback.sh  
Author: Ruoran Liu

`./sample.sh`

Import  
```sh
source feedback.sh
```

Adding item  
```sh
item1=$(add_item "id1" "Title" "Subtitle" "arg")
item2=$(add_item "id2" "Test" "This is the description" "returned value" "yes" "autocomplete" "public.jpeg" "file" "filetype")
```

Outputting XML  
```sh
output_xml "$item1" "$item2"
```
##Ruby
Library: alfred_feedback.rb

`ruby sample.rb`

Import  
```ruby
load 'alfred_feedback.rb'
```

Initialization  
```ruby
feedback = Feedback.new
```

Adding item  
```ruby
feedback.add_item({:title => "Title", :subtitle => "Description", :arg => "Value", :uid => "ID", :icon => {:type => "filetype", :name => "public.jpeg"}})
```

Outputting XML
```ruby
puts feedback.to_xml
```

---
##Reference
XML format explained: [http://www.alfredforum.com/topic/5-generating-feedback-in-workflows/](http://www.alfredforum.com/topic/5-generating-feedback-in-workflows/)
