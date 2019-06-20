var n1,primo;

n1=1;
i=2;
primo=true;

while(i<n1) {
    if(n1%i==0) {
        primo=false;
    }
    i++;
}

if(primo==true){
    document.write("El numero"+n1+"es primo");
    } else{
        document.write("El numero"+n1+"no es primo");
    }

    