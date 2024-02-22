// import express Module
const express = require("express");
// import body-parserModule
const bodyParser = require("body-parser");
// import multer
const multer = require('multer');

//  import Mongoose Module
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
// import bcrypt module
const bcrypt = require('bcrypt');
// import jwt module
var jwt = require('jsonwebtoken');
// import authenticate
const authenticate = require("./middelware/authenticate");
// create an application express
const app = express();
// create an application path
const path = require("path");

// import axios module 
const axios = require("axios");

// imports Model ******************************************************

const Match = require("./Models/Match");
const Player = require("./Models/Player");
const Team = require("./Models/Team");
const User = require("./Models/User");
const { error, profile } = require("console");
const user = require("./Models/User");
// const player = require("./Models/Player");


// ********************************************************************

// configure body-parser
// send Json reponses
app.use(bodyParser.json());
// get object from request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// let matchesTab =[
//     {id:1, scoreOne:1, scoreTwo:2, teamOne:"ca",teamTwo:"EST"},
//     {id:2, scoreOne:3, scoreTwo:2, teamOne:"css",teamTwo:"EST"  },
//     {id:3, scoreOne:0, scoreTwo:0, teamOne:"css",teamTwo:"ca"  },
// ]

// business logic:ADD MATCH
app.post("/matches", (req, res) => {
    console.log(req.body);

    let match = new Match({
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
    })
    match.save();
    res.json({ message: "added with sucess" })
    console.log("here the business logic off add match");
})
// business logic:getAllMatches
app.get("/matches", (req, res) => {
    console.log("here the business logic of get all teams");
    Match.find().then((data) => {
        res.json({ matches: data, message: "ok" })
    })

})
// business logic:Get Match By Id
app.get("/matches/:id", (req, res) => {
    console.log("here the business logic of get Matches By Id");
    let id = req.params.id;
    //    for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id==id) {
    //         res.json({match:matchesTab[i]});
    //     }

    //    }
    Match.findOne({ _id: id }).then((data) => {
        res.json({ match: data });
    })
})
// business logic:update Matche
app.put("/matches", (req, res) => {
    console.log("here the business logic of update Match");
    let match = req.body;
    console.log("here the business logic of update Match", match);
    Match.updateOne({ _id: match._id }, match).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})
// business logic: Delet Match
app.delete("/matches/:id", (req, res) => {
    console.log("here the business logic of delet Match ");
    let id = req.params.id;
    console.log(("here the id from the FE", id));
    Match.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object :${id}` });
        }
    })
})

// **********************************************************************************

// let playerTab=[
//     {id:1, name:"salah jemaa", age:28, position:"attaquant", number:7},
//     {id:2, name:"Aymen Dahmene", age:30, position:"Gardiens", number:5},
// ]

// // business logic:ADD Player
// app.post("/players", (req, res) => {
//     console.log(req.body);

//     let player = new Player({
//         name: req.body.name,
//         age: req.body.age,
//         position: req.body.position,
//         number: req.body.number,
//         // image:req.body.image,
//     })
//     player.save();
//     res.json({ message: "added with sucess" })
//     console.log("here the business logic off add Player");
// })
// Business Logic :ADD Player
app.post("/players", (req, res) => {
    console.log("here BL: add player");
    console.log(req.body);
    try {
        // Find team by Id
        Team.findById(req.body.teamId).then((team) => {
            if (!team) {
                return res.status(404).json({ message: "Team not found" });
            }
            console.log("here the team from DB", team);
            req.body.teamId = team._id;
            console.log(team._id);
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                position: req.body.position,
                number: req.body.number,
                image: req.body.image,
                teamId: req.body.teamId,
            });
            player.save(() => {
                team.players.push(player);
                team.save();
                res.status(201).json({ message: "Done" });
            });
        })
    } catch (error) {
        console.log("here error", error);
    }
    // let player = new Player({
    //     name: req.body.name,
    //     age: req.body.age,
    //     position: req.body.position,
    //     nbre: req.body.nbre
    // });
    // player.save();
    // res.json({ message: "added with success" });
})


// business logic:getAllPlayers
app.get("/players", (req, res) => {
    // console.log(req.body);
    console.log("here the business logic of getallPlayers");
    Player.find().then((data) => {
        res.json({ players: data, message: "ok" })
    })

})

// business logic:Get Players By Id
app.get("/players/:id", (req, res) => {
    console.log("here the business logic of get Players By Id");
    let id = req.params.id;
    console.log(id);
    Player.findOne({ _id: id }).then((data) => {
        console.log("here the object", data);
        res.json({ playere: data });
    })
})

// business logic:update Player
app.put("/players", (req, res) => {
    console.log("here the business logic of up date Player");
    let playere = req.body;
    console.log("here the business logic of update Match", playere);
    Player.updateOne({ _id: playere._id }, playere).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})

// business logic: Delet Player
app.delete("/players/:id", (req, res) => {
    console.log("here the business logic of delet players ");
    let id = req.params.id;
    console.log(("here the id from the FE", id));
    Player.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object: ${id}` });

        }
    })
})


// ****************************************************************************************
// let teamsTab=[
//     {id:1,name:"GRT",stadium:"Bundesliga Stadiums",owner:"Marler Estates",foundation:"Marler Estates"},
//     {id:2,name:"MPR",stadium:"Rades Stadiums",owner:"Kais Saaied",foundation:"Ben Ali"}
// ]


// business logic:ADD Teams
app.post("/teams", (req, res) => {
    console.log(req.body);

    let team = new Team({
        name: req.body.name,
        stadium: req.body.stadium,
        owner: req.body.owner,
        foundation: req.body.foundation,
    })

    team.save((err, doc) => {
        (err) ? res.json({ message: "NOK" }) : res.json({ message: "OK" });
    });

    res.json({ message: "added with sucess" })
    console.log("here the business logic off add team");
})
// business logic:getAllTeams
app.get("/teams", (req, res) => {
    // console.log(req.body);
    console.log("here the business logic of getallteams");
    Team.find().then((data) => {
        res.json({ teams: data, message: "ok" })
    })

})

// business logic:Get Teams By Id
app.get("/teams/:id", (req, res) => {
    console.log("here the business logic of get teams By Id");
    let id = req.params.id;
    Team.findOne({ _id: id }).then((data) => {
        res.json({ teame: data });
    })
})

// business logic:update Teams
app.put("/teams", (req, res) => {
    console.log("here the business logic of up date team");
    let team = req.body;
    console.log("here the business logic of update Match", team);
    Team.updateOne({ _id: team._id }, team).then((editResponse) => {
        console.log(editResponse);
        if (editResponse.nModified == 1) {
            res.json({ message: "edited with sucess" });
        }
    })
})

// business logic: Delet Teams
app.delete("/teams/:id", (req, res) => {
    console.log("here the business logic of delet teams ");
    let id = req.params.id;
    console.log("here the id from the FE", id);
    Team.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log(deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: `deleted object:${id}` });

        }

    })
})
// ***************************************************************
// get all players of team
app.get("/teams/:id/players", (req, res) => {
    console.log("here BL :Delete Team");
    console.log("hereid", req.params.id);
    try {
    Team.findById(req.params.id).populate("players").then((team) =>
    {
    console.log(team);
    if (!team) {
    return res.status(404).json({ message: "Team not found"
    });
    }
    res.json({ team: team });
    })
    } catch (error) {
        console.log(error);
    }
    })




//Multer *************************************************************

app.use('/avatars', express.static(path.join('Backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];

        if (!isValid) {
            let error = new Error("Mime type is invalid");
            cb(error, 'Backend/images')
        } else {
            cb(null, 'Backend/images')
        }

    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// *************************************************************
// business logic:Signup
app.post("/allUsers/subscription", multer({ storage: storageConfig }).single('img'), (req, res) => {
    // app.post("/allUsers/subscription", (req, res)=>{ 
    bcrypt.hash(req.body.password, 8).then((bcryptPwd) => {
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcryptPwd,
            role: req.body.role,
            avatar: `http://localhos:3000/avatars/${req.file.filename}`,
        })


        user.save((error, doc) => {
            if (doc) {
                res.json({ message: "added with success" });
                console.log("here the business logic off add user");
            } else {
                res.json({ message: "Error" });
            }
        });

        console.log(("here the BL of Signup", user));
    })

})

// business logic:signin
app.post("/allUsers/signin", (req, res) => {
    let user = req.body;
    let findedUser;
    console.log(("here the object from the FE", user));
    User.findOne({ email: user.email }).then((doc) => {
        findedUser = doc;
        console.log("here the doc from the Data base", doc);
        if (!doc) {
            res.json({ message: "Email Invalid" })
        }
        return bcrypt.compare(user.password, doc.password)
    }).then((pwdResult) => {
        if (!pwdResult) {
            res.json({ message: "password Invalide" })
        } else {
            let token = jwt.sign({
                email: findedUser.email,
                userId: findedUser._id,
                userRole: findedUser.role,
            },
                "testing",
                { expiresIn: "30min" }
            );
            let userToSend = {
                id: findedUser._id,
                firstName: findedUser.firstName,
                lastName: findedUser.lastName,
                role: findedUser.role,
                jwt: token,
                expiresIn: 1800,
            }
            res.json({ message: "Welcome", user: userToSend });
        }
    })

})

// business logic: Getprofile By Id

app.get("/allUsers/:id", (req, res) => {
    console.log("here the business logic of get user By Id");
    let userId = req.params.id;
    console.log(userId);
    user.findOne({ _id: userId }).then((data) => {
        res.json({ userById: data });
    })
})
// business logic:update users
app.put("/allUsers", (req, res) => {
    console.log("here the business logic of update profile");
    let newUser = req.body;
    console.log("here the business logic of update profile", user);
    User.findById(newUser_id).then((profile) => {
        bcrypt.compare(newUser.oldPassword, profile.password)
    }).then((pwdResult) => {
        if (!pwdResult) {
            res.json({ message: "click your old password" })
        } bcrypt.hash(req.body.newPassword, 8).then((cryptedPwd) => {
            User.updateOne({ _id: newUser._id }, { password: cryptedPwd }).then((editResponse) => {
                res.json({ data: editResponse, message: "all update is ok" })
            })
        })


    })
})

// Search
app.get('/matches/search/:teamOne', (req, res) => {
    const search = req.params.teamOne;
    Match.find({ teamOne: search }).then((foundObjects) => {
    if (foundObjects) {
    res.status(200).json({
    match: foundObjects
    });
    } else {
    res.status(404).json({
    message: 'No matches found for the specified teamOne.'
    });
    }
    }).catch(error => {
    res.status(500).json({
    error: error.message
    });
    });
});   


// Business Logic: Search Weather From API
app.get("/api/weather/:city", (req, res) => {
    console.log("Here into BL: Search weather by city", req.params.city);
    let key = "fc0c794cd9b86d6fef1e4ad48596c51a";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`;
    axios.get(apiURL).then((weatherResponse) => {
      let data = weatherResponse.data;
      console.log("Data", data);
      let description = data.weather[0].description;
      let icon = data.weather[0].icon;
      let result = {
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        icone: `https://openweathermap.org/img/wn/${icon}@4x.png`,
        description: description,
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000),
      };
      res.json({ result: result });
    }).catch((error) => {
        console.error('Error in weather request:', error);
        console.log('Detailed error response:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error retrieving weather data.' });
      });
      
  });




  
module.exports = app;



