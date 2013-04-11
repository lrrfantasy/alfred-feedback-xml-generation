from Feedback import Feedback
fb = Feedback()
fb.add_item("Hello", "World")
fb.add_item("Title", subtitle="Item description", arg="Value return to workflow", valud="yes", autocomplete="Description", icon="public.jpeg", filetype="file", icontype="filetype")
print fb
