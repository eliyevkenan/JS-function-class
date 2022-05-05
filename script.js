/***************************practica******************************************/
function repeat(word,count=1){
    let newword=""
    for (let i = 0; i < count; i++) {
        newword+=word
    }
    return newword
}
console.log(repeat("sa"))
/***********************************************************************/
let gues;

if(confirm("Rehbersiniz?")){
    gues="director"
}
else if(confirm("Muavinsizin?")){
    gues="assistant"
}
else if(confirm("Nezaretcisiniz?")){
    gues="supervisor"
}

switch (gues) {
    case "director":
        alert("sizin siteme girisinize icaze verildi")
        break;
        case "assistant":
        alert("sizin siteme girisinize 1 saatliq icaze verildi")
        break;
    case "supervisor":
        alert("sizin siteme girisiniz yalniz icaze ile mumkundur")
        break;
    default:
        alert("sizin sizteme daxil olma huqunuz yoxdur!")
        break;
}

/************************************************************************** */
var test1={
    name:"orxan",
    surname:"salahov",
    age:21,
    gender:"male",
    test2:function(){
        return "data: "+this.name+this.surname
    }
}
console.log(test1.name,test1.surname,test1.age,test1.gender)
console.log(test1.test2())
/****************************************************************************** */
class student{
    constructor(name,surname,age,point){
        this.Name=name,
        this.surname=surname,
        this.Age=age,
        this.Point=point
        this.showinfo=`${name} - ${surname} - ${age} - ${point}`
    }
}

let std1=new student("Taleh","Mirzeyev",21,45);
let std2=new student("Saleh","Haciyev",21,55);
let std3=new student("Musa","Ehmedov",21,81);

function check(student){
    let students=[]
    for(let i=0;i<student.lenght;i++){
        if(student[i].point>50){
            student[student.lenght]=student[i]
        }
    }
    return student;
}

let netice=check([std1,std2,std3]);
console.log(netice)

/********************************************************************************* */

let arr=[1,2,4,5,7,10,52]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        console.log(arr[i])
    }
}

/************************************************************************************ */
let arr1=[1,2,4,5,7,10,52]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]%2==1) {
        console.log(arr1[i])
    }
}

