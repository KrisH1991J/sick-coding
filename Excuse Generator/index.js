window.onload = function () {
    document.querySelector(#button).addEventListener("click" function () {
    document.querySelector(#excuse).innerHTML = generateExcuse();
    })
    console.log();
};

let generateExcuse = function () {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let whoList = Math.floor(Math.random() * who.length);
    let actionList = Math.floor(Math.random() * action.length);
    let whatList = Math.floor(Math.random() * what.length);
    let whenList = Math.floor(Math.random() * when.length);

    return who[whoList] + ' ' + action[actionList] + ' ' + what[whatList] + ' ' + when[whenList];
}