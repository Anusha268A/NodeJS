const fetchUser = require('./userService');

async function getData() {

    const user = await fetchUser();

    console.log(user);
}

async function start() {

    const login = await user.loginUser();
    console.log(login);

    const profile = await user.getProfile();
    console.log(profile);
}

getData();
start();

// const user = require('./userService');

// async function start() {

//     const result = await Promise.all([
//         user.loginUser(),
//         user.getProfile()
//     ]);

//     console.log(result);
// }

// start();