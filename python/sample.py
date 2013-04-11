from Feedback import Feedback
fb = Feedback()
fb.add_item("Hello", "World")
fb.add_item("Foo", subtitle="Bar", arg="foobar", valid = "no", autocomplete = "complete", icon="public.jpeg", filetype="file", icontype="filetype")
print fb
