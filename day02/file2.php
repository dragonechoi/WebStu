<?php
    
    $file= $_FILES['bbb'];

    // 전송된 파일의 개수
    $fileNum= count($file['name']);

    for($i=0; $i<$fileNum; $i++){
        $srcName= $file['name'][$i];
        $size= $file['size'][$i];
        $tmpName= $file['tmp_name'][$i];

        //잘 받았는지 echo
        echo "$srcName <br>";
        echo "$size <br>";
        echo "$tmpName <br>";
        echo "======================<br>";

        //임시저장소 파일들 이동
        $dstName="./image/" . date("YmdHis") . $srcName;
      $result=  move_uploaded_file($tmpName, $dstName);
    if($result) echo "upload succes";
    else echo "upload fail";

    echo "============================= <br>";
    }

?>