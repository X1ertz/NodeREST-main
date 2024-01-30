const pos1 = ['n' , 'e' , 'n' , 'E' , 'e' , 'n'];
const pos2 = ['n' , 'e' , 'e' , 'N' , 'e' , 'n'];
const pos3 = ['n' , 'e' , 'W' , 'w' , 'w' , 'w' , 'n'];
const pos4 = ['n' , 'e' , 'n' , 'e' , 'e' , 's'];
const pos5 = ['w' , 'e' , 'n' , 'X' , 'e' , 's'];

findPos(pos1);
findPos(pos2);
findPos(pos3);
findPos(pos4);
findPos(pos5);

function findPos(pos) {
    let bot = 32;
for(let index of pos){
    if(index =='n' ||index == 'N'){
         bot -= 7 ; 
    }
    else if(index == 's' ||index == 'S') {
        bot += 7; 
    }
    else if(index == 'w' ||index == 'W') {
        bot -=1 ; 
    }
    else if(index == 'e' ||index == 'E') {
        bot +=1 ; 
    }
    else{
        console.log("Found!!");
        return 0 ;
        }
    }
    if(bot == 14){
        console.log("Wintarget1")
    }
    else if(bot == 15){
        console.log("Wintarget2")
    }
    else{
        console.log("Your lose!!")
    }
    
    
}