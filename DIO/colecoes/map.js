function getAdmins(map) {
  let admins = [];

  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }

  return admins;
}

const usuarios = new Map();

usuarios.set("Wanderson", "Admin");
usuarios.set("Jeane", "User");
usuarios.set("Ryan", "Admin");
usuarios.set("Rose", "User");
usuarios.set("Maria", "User");
usuarios.set("Nick", "Admin");

console.log(getAdmins(usuarios));
