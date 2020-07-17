//#Problem_1: feetToMile

function feetToMile(feet){

    if(feet>=0){
        var mile= feet/5280;
    }
    else{
      
        console.log("distance cannot be negative. We take it as a positive Number");
        var mile= feet/5280*-1;
    }
   
    return mile;
}




//#Problem_2: woodCalculator

function woodCalculator(chair,table,bed){
    if(chair>=0 && table>=0 && bed>=0)
    {
        var chair_count=chair*1;
        var table_count=table*3;
        var bed_count=bed*5;

        var woods=chair_count+table_count+bed_count;
    }

    else{
        console.log("Please Enter Positive Number For All Items");
        var woods=0;

    }
    return woods;
}




//#problem_3: brickCalculator

function brickCalculator(floor){
    var bricks=1000;
    if(floor<=0){
        console.log("Floor cannot be Negative Or Zero");
        bricks=0;

    }

    else if(floor<=10){
        bricks *=(floor*15);
    }

    else if(floor <= 20)
  {    
    floor -= 10;    
    bricks = ((bricks*10*15)+(bricks*floor*12));
  }
  else
  {
    floor -= 20;
    bricks = ((bricks*10*15)+(bricks*10*12)+(bricks*floor*10));
  }

  return bricks;

}





//Problem_4: tinyFriend

function tinyFriend(friends){
    var tiny=friends[0].length;
    for(var i=0; i<friends.length; i++){
       var currentFriend=friends[i].length;
        if(currentFriend>0){
            if(currentFriend<tiny)
        {
            tiny=currentFriend;
            result=friends[i];
        }
        }

        else{
            console.log("You Put an Empty String.");
            result='';
            
        }
        
    }
   
    
    return result;
}


