const myFavDates=new Date('1911-12-16');
console.log(myFavDates);

const anotherDate= new Date(1971,3,16,11,50,55,80)
console.log(anotherDate);

if(myFavDates.getTime()<anotherDate.getTime()){

    console.log('my fav time is earliar');
}



