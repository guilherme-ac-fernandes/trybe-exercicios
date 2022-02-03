const a = 40;
const b = 40;
const c = 40;

// Comparando três valores

if (a>b && a>c){
    if(b>c){
        console.log("A > B > C");
    }
    else if (c>b){
        console.log("A > C > B");
    }
    else{
        console.log("A > C = B");
    }
}
else if (b>a && b>c){
    if(a>c){
        console.log("B > A > C");
    }
    else if(c>a) {
        console.log("B > C > A");
    }
    else{
        console.log("B > C = A");
    }
}
else if (c>a && c>b){
    if(a>b){
        console.log("C > A > B");
    }
    else if(b>a){
        console.log("C > B > A");
    }
    else {
        console.log("C > B = A");
    }
}
else{
    console.log("A = B = C");
}