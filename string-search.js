const products=[
'Hp pavillion 15 black laptop',
'Thinkpad  480s yellow',
'iphone yeyoga maditation',
'uphone 21plus gray with green',
'Dell vayoga color 18gb ram'
]

const searching="green";
const output=[];
// for(const product of products){

// // console.log(product);
// if(product.toLowerCase().indexOf(searching.toLowerCase()) !=-1)
// {
// output.push(product)   
// }
// }



// for(const product of products){

//     if(product.toLowerCase().includes(searching.toLowerCase())){

//         output.push(product)
//     }
// }
// for(const product of products){
// if(product.toLowerCase().startsWith(searching.toLowerCase())){

//     output.push(product)
// }

// }
for(const product of products){

    if(product.toLowerCase().endsWith(searching.toLowerCase())){

        output.push(product)
    }
}
console.log(output);














