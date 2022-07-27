const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const SalaReuniones = require("../models/SalaReuniones.model");
const User = require("../models/User.model");



router.get('/salaReuniones', (req, res, next) => {
    SalaReuniones.find()
    .then((allSalaReuniones) =>  {
        console.log(allSalaReuniones)
        res.json(allSalaReuniones)
    }).catch((err) => res.json(err));  
});




router.post("/add-favorite/:id", isLoggedIn ,(req, res) =>{
const id = req.params.id
User.findByIdAndUpdate(req.user._id,{$push : {favorites : id}})
 .then(()=>{
        res.redirect("/profile")
    })
    .catch(err => console.log(err))
})


router.post("/delete-favorite/:id",isLoggedIn,(req,res)=>{
    const {id} = req.params
    User.findByIdAndUpdate(req.user._id,{$pull : {favorites : id}})
    .then(()=>{
        res.redirect("/profile")
    })
    .catch(err => console.log(err))
})



module.exports = router;