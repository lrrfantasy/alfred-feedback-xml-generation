#Alfred Workflow Feedback XML Generation

This is to help workflow developers to fast generate formatted XML which outputs to Alfred feedback.

##Python
Library: Feedback.py  
Sample: sample.py

```python
from Feedback import Feedback
fb = Feedback()
fb.add_item(title="Title", subtitle="Item description", arg="Value return to workflow", valud="yes", autocomplete="Description", icon="icon_path.jpg")
print fb
```


XML format explained: [http://www.alfredforum.com/topic/5-generating-feedback-in-workflows/](http://www.alfredforum.com/topic/5-generating-feedback-in-workflows/)