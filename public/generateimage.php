<?php 
$path_parts = pathinfo($_GET['filename']);
//print_r($path_parts);
$path = $path_parts['dirname'];
$filename = $path_parts['basename'].".jpg";

$matches =array();
$result = preg_match("/^([a-zA-Z0-9]+)(_w[0-9]+)?(_h[0-9]+)?$/", $path_parts['basename'],$matches);

if (!$result) exit; //todo return not found image

$filename = $matches[1];
$width=0;$height=0;
$haswidth = false;
$hasheight = false;

if ((count($matches)>=3)&&(strpos($matches[2], "_w") === 0)) {
	$width = intval(substr($matches[2], 2));
	$haswidth = true;
}
if ((count($matches)>=4)&&(strpos($matches[3], "_h") === 0)){	
	$height = intval(substr($matches[3], 2));
	$hasheight = true;
}	

/* echo $filename." ";
if ($width!==0) echo " width=".$width;
if ($height!==0) echo " height=".$height; */


$im = new \Imagick ( getcwd() .'/album/'.$filename.".jpg");
if ($hasheight && $haswidth) {
	$im = $im->coalesceimages();
	foreach ($im as $image){
		$image->cropthumbnailimage($width, $height);
		$image->setimagepage(0,0,0,0);
	}
	$im = $im->deconstructimages();
}
else  if ($hasheight || $haswidth) {
	$im = $im->coalesceimages();
	foreach ($im as $image){
		$image->resizeimage($width, $height, \Imagick::FILTER_LANCZOS, 1);
		$image->setimagepage(0,0,0,0);
	}
	$im = $im->deconstructimages();
}

function mkdirs($foldername){
	if (!is_dir($foldername)) mkdir($foldername,0777,true);
}


//other file types are delivered as original without resize
$imageContents = $im->getimagesblob();


$foldername = getcwd().'/cache/'.$path.'/';
mkdirs($foldername);
file_put_contents($foldername.$path_parts['basename'].".jpg", $imageContents);


header("Content-Type: image/jpeg");
echo $imageContents;

