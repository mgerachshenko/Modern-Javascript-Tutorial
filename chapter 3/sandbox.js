// for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){

    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// do while loops

let i = 4;

do{
    console.log('val of i is: ', i);
    i++;
} while(i < 5);

// if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 4){
//     console.log("that's a lot of ninjas");
// }

const password = 'p@ssword';

if(password.length >= 8){
    console.log('that password is long enough!');
}

// else if statements

const password = 'p@ss';

if(password.length >= 12){
    console.log('that password is mighty strong');
} else if(password.length >= 8){
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough');
}

// logical operators - OR || and AND &&

const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@')){
    console.log('that password is strong enough!');
} else {
    console.log('password is not strong enough');
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }

}

// variables & block scope

const age = 30;

if(true){

    const age = 40;
    const name = 'shaun';

    console.log('inside 1st code block: ', age, name);

    if(true){

        const age = 50;

        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age, name, test);