<?php
require_once 'mpdf60/mpdf.php';
$html = "<div><h1>Lookbook</h1></div>";
$arr = explode(',',$_GET['files']);
foreach ($arr as $filename){
	if ($filename ==='') continue;
	$html.='<div><img src="album/'.$filename.'.jpg" style="max-width:100%;padding-bottom:20px;"/></div>';

}

$mpdf=new mPDF();
$mpdf->SetTitle('Lookbook');
$mpdf->WriteHTML($html);
$mpdf->Output('lookbook.pdf','I');

?>