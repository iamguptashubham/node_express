const express = require("express");


const router = express.Router();

const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    },
    {
        id: 'u2',
        name: 'Shubham Gupta',
        image:
          'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 1
      },
  ];

router.get('/:uid', (req, res, next) =>{
    const userId = req.params.uid;
    const user = USERS.find(u=>{
        return u.id === userId
    })
    if(!user){
        const error = new Error("Couldn't find a user for provided userid")
        error.code = 404
        throw error;
    }
    res.json({user:user})
});



module.exports = router;