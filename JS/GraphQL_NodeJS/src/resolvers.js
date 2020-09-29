const messageTest = "Salut les amis !";
const taille = 1.98;
const dimension = 3 + 5;
const vrai = true;
const numIdent = "200BA";

// Tableau de données
let users = [
  {id: 1, name: "Jean", email: "jean@orange.fr", age: 27},
  {id: 2, name: "Sophie", email: "sophie@yahoo.fr", age: 34},
  {id: 3, name: "Paul", email: "paul@gmail.com", age: 17}
];



const resolvers = {
  Query: {
    hello: (parent, args, context, info) => messageTest,
    longueur: () => taille,
    largeur: () => dimension,
    TorF: () => vrai,
    newId: () => numIdent,
    users: () => users,
    user: (parent, {id}) => users.find(user => user.id == id)  // recherche d'un user suivant argument id, TODO : gérer Error
  },

  Mutation: {
    createUser: (parent, {id, name, email, age}) => {
      let checkID = users.findIndex(user => user.id == id);
      if (checkID == -1) {
        let newUser = {id, name, email, age};
        users.push(newUser);
        return newUser     // conformement au schema 
      } else {
        throw new Error ('ID déjà pris')
      }
    }, 

    deleteUser: (parent, {id}) => {
      let checkID = users.findIndex(user => user.id == id);
      if (checkID != -1) {
        users.splice(checkID, 1);
        return true
      } else {
        throw new Error ('ID inconnu')
      }
    }
  }
};

export default resolvers;
