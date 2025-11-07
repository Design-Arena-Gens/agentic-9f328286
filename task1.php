<?php
// Task 1: Find the largest of three numbers using nested if

echo "=== Finding Largest of Three Numbers ===\n\n";

// Test Case 1
$num1 = 45;
$num2 = 78;
$num3 = 23;

echo "Numbers: $num1, $num2, $num3\n";

if ($num1 >= $num2) {
    if ($num1 >= $num3) {
        echo "Largest number is: $num1\n\n";
    } else {
        echo "Largest number is: $num3\n\n";
    }
} else {
    if ($num2 >= $num3) {
        echo "Largest number is: $num2\n\n";
    } else {
        echo "Largest number is: $num3\n\n";
    }
}

// Test Case 2
$num1 = 100;
$num2 = 50;
$num3 = 150;

echo "Numbers: $num1, $num2, $num3\n";

if ($num1 >= $num2) {
    if ($num1 >= $num3) {
        echo "Largest number is: $num1\n\n";
    } else {
        echo "Largest number is: $num3\n\n";
    }
} else {
    if ($num2 >= $num3) {
        echo "Largest number is: $num2\n\n";
    } else {
        echo "Largest number is: $num3\n\n";
    }
}

// Test Case 3
$num1 = 25;
$num2 = 25;
$num3 = 25;

echo "Numbers: $num1, $num2, $num3\n";

if ($num1 >= $num2) {
    if ($num1 >= $num3) {
        echo "Largest number is: $num1\n";
    } else {
        echo "Largest number is: $num3\n";
    }
} else {
    if ($num2 >= $num3) {
        echo "Largest number is: $num2\n";
    } else {
        echo "Largest number is: $num3\n";
    }
}
?>
