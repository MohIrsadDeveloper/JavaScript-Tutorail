// break keyword
// break will stop for loop and execute outsid loop code.
for(let i=0; i<=10; i++) {
    if (i===4) {
        break;
    }
    console.log(i);
}

// continue keyword
// continue will skip centain condition and code will execute remains.

for(let i=0; i<=10; i++) {
    if (i===4) {
        continue;
    }
    console.log(i);
}

/************/
/* 
0
1
2
3

// second
0
1
2
3
5
6
7
8
9
10
*/