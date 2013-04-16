#!/usr/bin/env bash

add_item(){
  uid=$1
  title=$2
  subtitle=$3
  arg=$4
  valid=${5:-"no"}
  autocomplete=${6:-""}
  icon=${7:-""}
  filetype=${8:-""}
  icontype=${9:-""}
  echo "  <item uid='$uid' arg='$arg' valid='$valid' autocomplete='$autocomplete' filetype='$filetype'>"
  echo "    <title>$title</title>"
  echo "    <subtitle>$subtitle</subtitle>"
  echo "    <icon type='$icontype'>$icon</icon>"
  echo "  </item>"
}

output_xml(){
  echo '<?xml version="1.0"?>'
  echo '<items>'
  for item in "$@"
  do
    echo "$item"
  done
  echo '</items>'
}
