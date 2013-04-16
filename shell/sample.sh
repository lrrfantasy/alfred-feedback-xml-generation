#!/usr/bin/env bash

source feedback.sh

item1=$(add_item "id1" "Title" "Subtitle" "arg")
item2=$(add_item "id2" "Test" "This is the description" "returned value" "yes" "autocomplete" "public.jpeg" "file" "filetype")
output_xml "$item1" "$item2"
