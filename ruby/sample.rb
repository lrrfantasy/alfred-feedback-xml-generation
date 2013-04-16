load 'alfred_feedback.rb'

feedback = Feedback.new
feedback.add_item({:title => "Title", :subtitle => "Description", :arg => "Value", :uid => "ID", :icon => {:type => "filetype", :name => "public.jpeg"}})
puts feedback.to_xml
