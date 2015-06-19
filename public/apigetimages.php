<?php
function endsWith($haystack, $needle) {
	// search forward starting from end minus needle length characters
	return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== FALSE);
}

$directory = 'album';
//scans for jpeg files in $directory
$scanned_directory = array_values(array_filter(scandir($directory),function($element){if (endsWith($element,".jpg")) return true;return false;}));
$scanned_directory = array_map(function($element){return array('filename' => $element);}, $scanned_directory);
//return results json encoded
echo json_encode($scanned_directory);