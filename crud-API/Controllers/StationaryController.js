const Stationary = require("../Models/StationaryModel");
const getStationary = (req, res) => {
  Stationary.find().then(Stationary=>res.send(Stationary)).catch(err=>res.send(err));

};

const getStationaryById = (req, res)=>{
  Stationary.findById(req.body.id).then(Stationary=>res.send(Stationary)).catch(err=>res.send(err));
}
const updateStationary = (req, res) => {
    const bk = {

      name: req.body.title,

      price: req.body.price,
     
    };
    Stationary.findByIdAndUpdate(req.body.id, bk, { new: true })
      .then(updatedStationary => res.send(updatedStationary))
      .catch(err => res.status(400).send(err));
  }
  
const deleteStationary = (req, res)=>{
  Stationary.findByIdAndDelete(req.body.id).then(Stationary => res.send(Stationary)).catch(err=>res.send(err));
}
  
  const createStationary = async (req, res) => {
    const bk = new Stationary({
        name: req.body.title,
        price: req.body.price,
      });
  
    try {
      const savedStationary = await bk.save();
      res.json(savedStationary);
    } catch (err) {
      res.send(err);
    }
  };
  

module.exports = {
    getStationary, createStationary, getStationaryById, deleteStationary, updateStationary
};

  

