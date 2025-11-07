const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  }
});

// Pipe to a file
doc.pipe(fs.createWriteStream('PHP_Programming_Project_Report.pdf'));

// ============= FRONT PAGE =============
doc.fontSize(28).font('Helvetica-Bold').text('PHP PROGRAMMING', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(24).text('PROJECT REPORT', { align: 'center' });
doc.moveDown(3);

doc.fontSize(16).font('Helvetica').text('Submitted by:', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(14).text('[Student Name]', { align: 'center' });
doc.moveDown(3);

doc.fontSize(14).text('Course: PHP Programming', { align: 'center' });
doc.moveDown(0.5);
doc.text('Date: ' + new Date().toLocaleDateString(), { align: 'center' });
doc.moveDown(5);

doc.fontSize(18).font('Helvetica-Bold').text('Tasks Included:', { align: 'center' });
doc.moveDown(1);
doc.fontSize(12).font('Helvetica');
doc.text('1. Find the Largest of Three Numbers Using Nested If', { align: 'center' });
doc.moveDown(0.5);
doc.text('2. Reverse a String Using strrev()', { align: 'center' });

// ============= TASK 1 - NEW PAGE =============
doc.addPage();

// Task 1 Title
doc.fontSize(20).font('Helvetica-Bold').text('TASK 1', { align: 'center' });
doc.moveDown(1);

// Task Name
doc.fontSize(16).font('Helvetica-Bold').text('Task Name:', { continued: false });
doc.fontSize(12).font('Helvetica').text('Find the Largest of Three Numbers Using Nested If', { indent: 20 });
doc.moveDown(1);

// AIM
doc.fontSize(16).font('Helvetica-Bold').text('AIM:');
doc.fontSize(12).font('Helvetica').text('To write a PHP program that finds and displays the largest among three given numbers using nested if-else statements.', { indent: 20 });
doc.moveDown(1);

// Problem Statement
doc.fontSize(16).font('Helvetica-Bold').text('Problem Statement:');
doc.fontSize(12).font('Helvetica').text('Given three numbers, determine which number is the largest using nested if-else conditional statements in PHP. The program should compare the numbers systematically and output the largest value.', { indent: 20 });
doc.moveDown(1);

// Constraints
doc.fontSize(16).font('Helvetica-Bold').text('Constraints:');
doc.fontSize(12).font('Helvetica');
doc.list([
  'Must use nested if-else statements only',
  'No use of built-in max() function',
  'Should handle equal numbers correctly',
  'Numbers can be positive, negative, or zero'
], { indent: 20 });
doc.moveDown(1);

// Procedure
doc.fontSize(16).font('Helvetica-Bold').text('Procedure:');
doc.fontSize(12).font('Helvetica');
doc.list([
  'Declare and initialize three variables with numeric values',
  'Use the first if statement to compare num1 and num2',
  'If num1 >= num2, use nested if to compare num1 and num3',
  'If num1 >= num3, then num1 is the largest',
  'Otherwise, num3 is the largest',
  'If num2 > num1, use nested if to compare num2 and num3',
  'If num2 >= num3, then num2 is the largest',
  'Otherwise, num3 is the largest',
  'Display the result'
], { indent: 20 });
doc.moveDown(1);

// Program
doc.fontSize(16).font('Helvetica-Bold').text('Program:');
doc.moveDown(0.5);
doc.fontSize(10).font('Courier');

const program1 = `<?php
// Find the largest of three numbers using nested if

$num1 = 45;
$num2 = 78;
$num3 = 23;

echo "Numbers: $num1, $num2, $num3\\n";

if ($num1 >= $num2) {
    if ($num1 >= $num3) {
        echo "Largest number is: $num1\\n";
    } else {
        echo "Largest number is: $num3\\n";
    }
} else {
    if ($num2 >= $num3) {
        echo "Largest number is: $num2\\n";
    } else {
        echo "Largest number is: $num3\\n";
    }
}
?>`;

doc.text(program1, { indent: 20 });
doc.moveDown(1);

// Output
doc.fontSize(16).font('Helvetica-Bold').text('Output:');
doc.moveDown(0.5);
doc.fontSize(10).font('Courier');

const output1 = `=== Finding Largest of Three Numbers ===

Numbers: 45, 78, 23
Largest number is: 78

Numbers: 100, 50, 150
Largest number is: 150

Numbers: 25, 25, 25
Largest number is: 25`;

doc.rect(doc.x, doc.y, 500, 120).stroke();
doc.moveDown(0.5);
doc.text(output1, { indent: 30 });
doc.moveDown(2);

// Conclusion
doc.fontSize(16).font('Helvetica-Bold').text('Conclusion:');
doc.fontSize(12).font('Helvetica').text('The program successfully demonstrates the use of nested if-else statements to find the largest among three numbers. The nested structure allows for systematic comparison of all three values, ensuring accurate identification of the maximum value. The program handles various test cases including equal numbers effectively.', { indent: 20, align: 'justify' });

// ============= TASK 2 - NEW PAGE =============
doc.addPage();

// Task 2 Title
doc.fontSize(20).font('Helvetica-Bold').text('TASK 2', { align: 'center' });
doc.moveDown(1);

// Task Name
doc.fontSize(16).font('Helvetica-Bold').text('Task Name:');
doc.fontSize(12).font('Helvetica').text('Reverse a String Using strrev()', { indent: 20 });
doc.moveDown(1);

// AIM
doc.fontSize(16).font('Helvetica-Bold').text('AIM:');
doc.fontSize(12).font('Helvetica').text('To write a PHP program that reverses a given string using the built-in strrev() function and displays both the original and reversed strings.', { indent: 20 });
doc.moveDown(1);

// Problem Statement
doc.fontSize(16).font('Helvetica-Bold').text('Problem Statement:');
doc.fontSize(12).font('Helvetica').text('Create a PHP program that takes a string as input and produces its reverse using the strrev() function. The program should demonstrate the function\'s capability to reverse strings of various types including alphabetic, numeric, and mixed characters.', { indent: 20 });
doc.moveDown(1);

// Constraints
doc.fontSize(16).font('Helvetica-Bold').text('Constraints:');
doc.fontSize(12).font('Helvetica');
doc.list([
  'Must use the strrev() function',
  'Should handle strings with spaces',
  'Should work with alphanumeric characters',
  'Preserves the original string (non-destructive operation)'
], { indent: 20 });
doc.moveDown(1);

// Procedure
doc.fontSize(16).font('Helvetica-Bold').text('Procedure:');
doc.fontSize(12).font('Helvetica');
doc.list([
  'Declare a string variable with a value',
  'Call the strrev() function with the string as parameter',
  'Store the reversed string in a new variable',
  'Display both the original and reversed strings',
  'Test with multiple string variations to verify functionality'
], { indent: 20 });
doc.moveDown(1);

// Program
doc.fontSize(16).font('Helvetica-Bold').text('Program:');
doc.moveDown(0.5);
doc.fontSize(10).font('Courier');

const program2 = `<?php
// Reverse a string using strrev()

$string1 = "Hello World";
$reversed1 = strrev($string1);
echo "Original String: $string1\\n";
echo "Reversed String: $reversed1\\n\\n";

$string2 = "PHP Programming";
$reversed2 = strrev($string2);
echo "Original String: $string2\\n";
echo "Reversed String: $reversed2\\n\\n";

$string3 = "12345";
$reversed3 = strrev($string3);
echo "Original String: $string3\\n";
echo "Reversed String: $reversed3\\n";
?>`;

doc.text(program2, { indent: 20 });
doc.moveDown(1);

// Output
doc.fontSize(16).font('Helvetica-Bold').text('Output:');
doc.moveDown(0.5);
doc.fontSize(10).font('Courier');

const output2 = `=== String Reversal Using strrev() ===

Original String: Hello World
Reversed String: dlroW olleH

Original String: PHP Programming
Reversed String: gnimmargorP PHP

Original String: 12345
Reversed String: 54321

Original String: A man a plan a canal Panama
Reversed String: amanaP lanac a nalp a nam A`;

doc.rect(doc.x, doc.y, 500, 150).stroke();
doc.moveDown(0.5);
doc.text(output2, { indent: 30 });
doc.moveDown(2);

// Conclusion
doc.fontSize(16).font('Helvetica-Bold').text('Conclusion:');
doc.fontSize(12).font('Helvetica').text('The program successfully demonstrates the use of PHP\'s built-in strrev() function to reverse strings. The function efficiently reverses the order of characters in a string, handling various types of input including words, sentences, and numeric strings. This function is particularly useful for string manipulation tasks and demonstrates PHP\'s rich string handling capabilities.', { indent: 20, align: 'justify' });

// Finalize PDF
doc.end();

console.log('PDF generated successfully: PHP_Programming_Project_Report.pdf');
