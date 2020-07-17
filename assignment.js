
//feettomile start//

function feettomile(feet) {
    var mile = feet / 5280;
    return mile;
}
 var result = feettomile(1.609344);
 console.log(result);
//feettomile end//

//woodcalculator start//
 function woodCalculator(chair, table, bed, teatable){
    var chairCount = chair * 1;
    var tableCount = table * 4;
    var teaTbCount = teatable * 8;
    var bedCount = bed * 6;
    var totalWood = chairCount + tableCount + bedCount + teaTbCount;
    return totalWood;
}
//woodcalculator end// 


// brickCalculator start

function brickCalculator(floor){
    const  brickPerFeet = 2000;
    var firstTenFloor = 20;
    var secondTenFloor = 20;
    
    if(floor > 40){
        var a = floor - 40;
        var totalBricks = (a * 40 * 2000) + (firstTenFloor * 25 * 2000) + (secondTenFloor * 25 * 2000);
        return totalBricks;
    }
    else if(floor > 10 && floor <= 20){
        var b = floor - secondTenFloor;
        var totalBricks = (firstTenFloor * 25 * 2000) + (b * 12 * 1000);
        return totalBricks;
    }
    else{
        floorHight = 15;
        var totalBricks = brickPerFeet * floorHight * floor;
        return totalBricks;
    }
}

// brickCalculator end//

// tinyFriend start//

function tinyFriend(allNames){
    var smallName = allNames[0].length;
    for(var i = 0; i < allNames.length; i++){
        var currentName = allNames[i].length;
        if(currentName < smallName){
            smallName = currentName;
        }
    }
    return smallName;
}
var smallAllName = tinyFriend(['alli', 'popi', 'simu', 'salma', 'aklima', 'pinki-haque']);
console.log(smallAllName);
//tinyFriend end//
