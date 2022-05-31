
export class Lesson {
    constructor() {
        console.log('Lesson ========================');
        // your code goes here


        
        console.log( 3 + 3 );
        console.log( 3 - 3 );
        console.log( 3 * 3 );
        console.log( 3 / 3 );
  
  
  
        let x = 100 + 50;
        console.log('x:', x);

        let sum1 = 100 + 50;        // 150 (100 + 50)
        let sum2 = sum1 + 250;      // 400 (150 + 250)
        let sum3 = sum2 + sum2;     // 800 (400 + 400)

        console.log(sum3);
  
        /*
            Arithmetic Operators
            Arithmetic operators are used to perform common mathematical operations:
        
            +     Addition	Adds together two values 	                x + y
            -     Subtraction	Subtracts one value from another        x -y
            *     Multiplication	Multiplies two values               x *y
            /     Division	Divides one value by another              x / y
            %     Modulus	Returns the division remainder	            x % y
            ++	  Increment Increases the value of a variable by 1	  x++
            --	  Decrement Decreases the value of a variable by 1	  x--
    
        */
    
        /*
            Assignment operators are used to assign values to variables.
        
            In the example below, we use the assignment operator (=) to assign
            the value 10 to a variable called x:
        */
  
  
        let y = 10;
        console.log('y:', y);
    
        let z = 10;
        z += 5; // z = z + 5
        z++; //16
    
        console.log(z);
    
    
        let resultA = ( ( 3 + 3) * 2 + 4 ) / 2;
        console.log("resultA: " + resultA);
    
        let resultB = ( ( 3 + 3) * (2 + 4) ) / 2;
        console.log("resultB: " + resultB);
  
        console.log('ddddd');
    }
}