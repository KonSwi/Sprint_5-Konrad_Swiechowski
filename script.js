const users = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

// console.log("Dane wejściowe START:", users);

// Zadanie 1

function addNicknames(usersArr) {
  return usersArr.map((user) => {
    if (
      typeof user.firstName === "string" &&
      typeof user.lastName === "string" &&
      user.firstName.trim().length >= 3 &&
      user.lastName.trim().length >= 3
    ) {
      fromFirstName = user.firstName
        .split("")
        .reverse()
        .join("")
        .substring(0, 3);
      fromLastName = user.lastName.substring(0, 3).split("").reverse().join("");
      connectNicknameParts = (fromFirstName + fromLastName).toLowerCase();
      finalNickname =
        connectNicknameParts.charAt(0).toUpperCase() +
        connectNicknameParts.slice(1);
      return {
        ...user,
        nickname: finalNickname,
      };
    } else {
      return user;
    }
  });
}

// console.log("Zadanie 1", addNicknames(users));

// Zadanie 2

function onlyWithNicknames(users) {
  return users.filter((user) => Object.keys(user).includes("nickname"));
}
function addAge(users) {
  return users.map((user) => {
    sumOfChar = [user.firstName.length, user.lastName.length].reduce(
      (first, next) => first + next,
      0
    );
    if (sumOfChar % 2 === 0) {
      user.age = sumOfChar;
      return user;
    }

    let nrOfIndex = users.indexOf(user);
    if (nrOfIndex === 0) {
      nrOfIndex = 1;
    }

    sumOfCharSecond = Math.ceil(
      Object.keys(user)
        .map((key) => key.length)
        .reduce((first, next) => first + next, 0) / nrOfIndex
    );
    user.age = sumOfCharSecond;
    return user;
  });
}

// console.log("Zadanie 2", addAge(onlyWithNicknames(addNicknames(users))));

// // Zadanie 3

function mostCommonLetter(usersArr) {
  return usersArr.map((user) => {
    text = `${user.firstName}${user.lastName}${user.nickname}`.toLowerCase();
    result = {};
    text.split("").forEach((letter) => {
      if (!result.hasOwnProperty(letter)) {
        result[letter] = 0;
      }
      result[letter]++;
    });
    const sortedArray = Object.entries(result)
      .sort((a, b) => {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return 1;
        }
        return 0;
      })
      .sort(([, valueA], [, valueB]) => valueB - valueA)[0];

    const obj = {
      letter: sortedArray[0],
      count: sortedArray[1],
    };
    user.mostCommonLetter = obj;
    return user;
  });
}

console.log("Zadanie 3",mostCommonLetter(addAge(onlyWithNicknames(addNicknames(users)))));

// console.log("Dane wejściowe END:", users);