<?php
include_once('workflows.php');
$w = new Workflows();

$w->result('itemuid', 'itemarg', 'Some Item Title', 'Some item subtitle', 'icon.png', 'yes', 'autocomplete');
echo $w->toxml();

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
?>