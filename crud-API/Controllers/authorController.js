const author = require("../Models/authorModel");

const getAuthors = (req, res) => {
    author.find().then(author=>res.send(author)).catch(err=>res.send(err));
};

const getAuthorById = (req, res)=>{
    author.findById(req.body.id).then(author=>res.send(author)).catch(err=>res.send(err));
}

const updateAuthor = (req, res) => {
    const auth = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      numberOfBooksPublished: req.body.numberOfBooksPublished,
     
    };
    author.findByIdAndUpdate(req.body.id, auth, { new: true })
      .then(updatedAuthor => res.send(updatedAuthor))
      .catch(err => res.status(400).send(err));
  }
  
const deleteAuthor = (req, res)=>{
  author.findByIdAndDelete(req.body.id).then(author => res.send(author)).catch(err=>res.send(err));
}
  
const createAuthor = async (req, res) => {
  const auth = new author({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    numberOfBooksPublished: req.body.numberOfBooksPublished,
    });

  try {
    const savedAuthor = await auth.save();
    res.json(savedAuthor);
  } catch (err) {
    res.send(err);
  }
};
  
module.exports = {
    getAuthors,
    createAuthor, getAuthorById, deleteAuthor, updateAuthor
};

  

