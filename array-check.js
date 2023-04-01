function megaName(names){
if(Array.isArray(names) == false){
    return 'please provide an Araay'
}
let mega=[];
for(const name of names){
   if(name.length > mega.length ){
     mega=name;
   }
}
return mega;
}
const name =['david','dolar','dipjoldip','pasahawladar']
const result =megaName(name)
//  console.log(result);



const friends =['david','dolar','dipjoldip','pasahawladar']

// if(friends.indexOf('dolar')!= -1){

//     console.log('friends ache');
// }else{

//     console.log('friend nai');
// }

// if(friends.includes('dolar')){
//     console.log('amader vilaain ekhane ache');
// }

// const first=[1,2,3,5];
// const second=[7,9,8];
 
// const add=first.concat(second) ;

// console.log(add);


// const array =['david','dolar','dipjoldip','pasahawladar']

// const check =array.splice('a')

// const check=array.slice(5,14)

// const check=array.substr('5,7');

// console.log(check);









