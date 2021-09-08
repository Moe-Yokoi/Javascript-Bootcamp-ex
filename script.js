let Matt = 80;
let Simon = 45;
let limit = 51;

if(Matt >= limit && Simon >=limit){
    console.log("Both of the students passed!");
}else if(Matt >= limit || Simon >=limit){
    console.log("One of the students passed!");
    if(Matt >= limit){
        console.log("Name : Matt");
        console.log("Score : " + Matt);
    }else{
        console.log("Name : Simon");
        console.log("Score : " + Simon);
    }
}else{
    console.log("None of the students passed!");
}


