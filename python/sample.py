from Feedback import Feedback
fb = Feedback()
fb.add_item("Hello", "World")
fb.add_item("Foo", subtitle="Bar", icon="foobar.icon", arg="foobar")
print fb
