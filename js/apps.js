const dataAraay = [
  {
    userId: 1,
    userName: "სახელი 1",
    userLastName: "გვარი 1",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 20,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 2,
    userName: "სახელი 2",
    userLastName: "გვარი 2",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 30,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 3,
    userName: "სახელი 3",
    userLastName: "გვარი 3",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 35,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 4,
    userName: "სახელი 4",
    userLastName: "გვარი 4",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 29,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 5,
    userName: "სახელი 5",
    userLastName: "გვარი 5",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 49,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 6,
    userName: "სახელი 6",
    userLastName: "გვარი 6",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 7,
    userName: "სახელი 7",
    userLastName: "გვარი 7",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
];

const myArrayElement = document.getElementById("myArray");
myArrayElement.forEach((object) => {
  const card = document.createElement("div");
  card.classList.add("infoCard");
  const image = document.createElement("img");
  image.src = userImage;

  const name = document.createElement("h3");
  name.innerText = object.userName;

  const surname = document.createElement("h5");
  name.innerText = object.userLastName;
  const Age = document.createElement("");
});
