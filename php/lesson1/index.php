

    <?php 
        /* Variables */

        echo "Hello PH" . "<br />";

        $fname = "<p>Lex</p>";
            echo $fname;

        $varName = 'fname';
        echo $$varName;

        /*--------------------------------------*/

        /* Array */

        $myArray = array ('Lex', 'Lovs', 'Kingdom', 'Coco');

        print_r($myArray);

        echo "<br> <br>";

        echo $myArray[2];

        $anotherArray[0] = 'Zues';
        $anotherArray[1] = 'Bobby';
        $anotherArray[2] = 'Elsa';
        $anotherArray[4] = 'Lucas';

        echo "<br> <br>";
        print_r($anotherArray);

        /* Associative Array */

        $thirdArray = array (
            "Laptop" => "Lenovo",
            "Phone" => "iPhone",
            "Car" => "Toyota",
            "Motor" => "Honda",
        );

        echo "<br> <br>";
        print_r($thirdArray);
        echo "<br> <br>";
        echo($thirdArray['Car']);

        /* if else statements */
        echo "<br> <br>";

        $user = 'Lex';

        if ($user == 'Lex') {
            echo "Hi i'm Lex!";
        } else {
            echo "I don't know you";
        }

        echo "<br> <br>";

        $age = 27;

        if ($age >= 25) {
            echo "You can proceed";
        } else {
            echo "Your too young";
        }

        echo "<br> <br>";

        /* For Loop */

        for ($i = 0; $i < 10; $i++) {
            echo $i. "<br>";
        };

        echo "<br> <br>";

        for ($i = 2; $i <= 30; $i = $i + 2) {
            echo $i. "<br>";
        };

        echo "<br> <br>";

        for ($i = 10; $i >= 0; $i--) {
            echo $i. "<br>";
        };

        echo "<br> <br>";

        $family = array ('Lex', 'Lovie', 'Kingdom', 'Coco');

        echo "<br> <br>";

        foreach ($family as $indexName => $result) {
            $family[$indexName] = $result." Cerdena";
            echo 'Array item '. $indexName . " " . $result.'<br>';
        };

        echo "<br> <br>";

        for ($i = 0; $i < sizeof($family); $i++) {
            echo $family[$i].'<br>';
        }

    ?>