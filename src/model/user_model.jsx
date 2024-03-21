class UserModel {
    constructor(username, password, names, lastnames, email, documentNumber, role) {
      this.username = username;
      this.password = password;
      this.names = names;
      this.lastnames = lastnames;
      this.email = email;
      this.documentNumber = documentNumber;
      this.role = role;
    }
  }

  export default UserModel;