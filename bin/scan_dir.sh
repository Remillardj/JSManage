#!/bin/bash

$css_path = ./css/
$js_path = ./js/

ls $css_path | grep *.css > cssfilenames.txt
ls $js_path | grep *.js > jsfilenames.txt