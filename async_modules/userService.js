function fetchUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Anusha"
            });

        }, 2000);

    });
}

function loginUser() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User Logged In");
        }, 1000);

    });
}

function getProfile() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Profile Data");
        }, 2000);

    });
}

module.exports = {
  fetchUser,
    loginUser,
    getProfile
};
