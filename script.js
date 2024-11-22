let passwords = [];
console.log(`Passwords:`);
passwords.push("idrather", "go", "BLIND");

console.log(passwords);

for (let i = 0; i < passwords.length; i++) {
    console.log(`Password number ${i+1}:`);
    let titopass = passwords[i];
    let patarapass = titopass.toLowerCase();
    console.log(patarapass);
    m = titopass.length;
    if (titopass.length < 8) {
        console.log(`Weak password, your passwords length is ${m}`);
    } else {
        console.log(`Strong password, your passwords length is ${m}`);
    }
}
console.log("List without first password: ");
passwords.shift();
console.log(passwords);
console.log("List with extra password:");
passwords.unshift("fr");
console.log(passwords);