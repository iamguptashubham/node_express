const express = require("express");



const router = express.Router();

const DUMMY_PLACES = [{
    id: "p1",
    title: "Empire I State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1"
    }, 
]

router.get('/:pid', (req, res, next)=>{
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(
        p => {
            return p.id === placeId
        });
    if(!place){
        const error = new Error("Couldn't find a place for provided place id")
        error.code = 404

        throw error;
    }
    res.json({place:place})
});


router.get('/user/:uid', (req, res, next)=>{
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(u=>{
        return u.creator === userId
    })
    if(!place){
        const error = new Error("Couldn't find a place for provided userid")
        error.code = 404
        throw error;
    }
    res.json({place:place})
});


module.exports = router;