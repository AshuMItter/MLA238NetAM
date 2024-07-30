
//- Enums or Enumerations -//

// enum StatuCodes{
//     RequestSuccess=200,
//     RequestFailure=400,
//     InternalServerError=500

// }

let user:[string,number,string,number,boolean] =  ["John",30,"lName",100,true];

user.forEach((val)=>{
//console.log(val);
})

// 1d array
 let oneDimensionalArray:number[]=[1,2,3,4,5];

 //console.log(oneDimensionalArray[2]);

 //2d Array
 let twoDimensionalArry:number[][] = [
    [1,2,3],  // 0 
    [4,5,6]   // 1
];

 //console.log(twoDimensionalArry[1][2]);


 // 3d array in tS
 let threeDimensionalArray:number[][][] = [
    [[1,2,3],   // -- 0
    [4,5,6],
    [12,13,14]],   
    [[7,8,9],  //   -- 1
    [10,11,12]]

]
console.log(threeDimensionalArray[0][2][2])

// //  2d and 3d array typescript
// let array:number[][][] = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]];

// //    [1] [2] [3]  [7]  [8]   [9]
// //    [4] [5] [6]  [10] [11]  [12]

// console.log(array[1][0][2]);


// let jaggedArray: number[][] = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
//   ];

  //console.log(jaggedArray[2][2]);

  // optional
  let optionalTuple: [string, number?] = ["Hello"]; // Second element is optional

  //rest
  let myTuple: [string, ...number[]] = ["Hello", 1, 2, 3];


  // Basic tuple
let user: [string, number] = ['John Doe', 30];

// Tuple with optional element
let address: [string, number, string?] = ['123 Main St', 12345, 'New York'];

// Tuple with rest element
let data: [string, ...number[]] = ['hello', 1, 2, 3];

// // Create one Enum for Specifying Integer Values to be stored in an Array. 
// // Loop through the array to print the results.



// // Create a tuple for storing data from One.Compiler SQL default Table :"
// And please show these using forEach like a row.


// let demo=(num)=>{

// }
// demo(StatuCodes.RequestSuccess);




// console.log(StatuCodes.RequestSuccess);

// console.log(StatuCodes.RequestFailure);

// console.log(StatuCodes.InternalServerError);




// - number to boolean - //
// let isNumber : number = 0;

// let num3:boolean = Boolean(isNumber);

// console.log(num3);


//- array to string -//
// let arrayOfNumber :number[] = [1,2,3,4,5,6];

// let str:string = arrayOfNumber.toString();

// console.log(str);

// let demo:void = undefined;

// console.log(demo);

// - object to string - //
// let person = {fname:'Danny',lname:'Bash'};

// let strVal:string = JSON.stringify(person);

//console.log(strVal);

// - number to string -//
// let num1:number = 34;

// let stringVal:string = num1.toString();

// console.log(stringVal);

// let goodName:string = "values";

// let flag:boolean = true;

// let dynamicTypeValue: any = "no error";

// let unionType: number | boolean = 34;

// console.log(unionType);


// let arrayOfNumberAndOthers:any[] = [1,2,3,4,5,6,7,8,"demo",23.56,true,false];

// arrayOfNumberAndOthers.forEach((val)=>{
//     console.log(val);
// })
// let areas:object[] = [{key:"value"}]

// // Write Typescript code for storing data from One.Compiler SQL default Table
// let person: object[] = [{key:"value"},{key1:"vaue"}];

// ///

// let demoName:string = "34";

// let covertedNum:number = Number(demoName);

// console.log(covertedNum);


// let isRight:boolean = true;

// let boolval:number = Number(isRight);

// console.log(boolval);


// let stringVal:string = String(isRight);

// console.log(stringVal);

// let javascript = "string";





// // areas.forEach((val) =>{
// //     console.log(val.key);
// // })
// // console.log(areas);



