<?php 
    /*----------------*/

    $woods = array(
        'A' => array (
                '1' => 'Mouse', 
                '2' => 'Cat', 
                '3' => 'Elephant' 
        ),
        'B' => array ('Ant', 'Little Dog', 'Giraffe', 'Lion')
    );
    echo $woods['B'][1] . "<br />";
    
    $array = array ('Hello', ' ', 'World');

    $arrayToString = implode($array);
    
    echo strtoupper($arrayToString);
?>