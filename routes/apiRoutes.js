const db = require("../models")
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {

  app.get("/api/posts", function (req, res) {
    db.Post
      .find(req.query)
      .populate('user')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.post("/api/posts", requireLogin, function (req, res){
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.get("/api/posts/:id", function (req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.get("/api/posts/:id", function (req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.put("/api/posts/:id", requireLogin, function (req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.delete("/api/posts/:id", requireLogin,function (req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.get("/api/posts/title/:title", function (req, res) {
    db.Post
      .find({ title: { $regex: `(?i).*${req.params.title}.*` } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  //TODO: Hook up this route with front end
  app.get("/api/usersposts", requireLogin, function(req,res) {
      db.Post
        .find({user: req.user._id})
        .populate('user')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

 //===================MESSAGING ROUTES ===================================
//  //Making a new conversation
  app.post('/api/conversations/:id', requireLogin, function(req,res){
      db.Conversation
        .create({users:[req.user._id, req.params.id]})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));;
  });
  //Note that these routes do not prevent a user from accessing conversations that do not belong to him! (yet)
  //Shows the conversations the user has started. (Lists the inbox)
  app.get('/api/conversations', requireLogin, function(req,res){
      db.Conversation
        .find({users: req.user._id})
        .populate('users')
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });
  //Gets a specific conversation and populates their messages. (Data will be displayed in message well) 
  app.get('/api/conversations/:cid', function(req,res){
      db.Conversation
        .findById(req.params.cid)
        .populate('messages')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });
  //POSTs messages as well as push to appropriate conversation. (Hooks up to the messaging box)
  app.post('/api/messages/:converseid', requireLogin, function(req,res){
      db.Message
        .create({
            conversation: req.params.converseid,
            sender: req.user._id,
            content: req.body.content  
            // conversation: req.params.converseid,
            // sender: "5ab9a9633e94220364526b5a",
            // content: "Hello World 3" 
        })
        .then(dbModel => (
            db.Conversation
                .findByIdAndUpdate(
                    {
                        _id:req.params.converseid
                    },
                    {
                        $push:{messages: dbModel._id}
                    }
                )
        ))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });
  //===================AUTH ROUTES ===================================

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/dashboard');
        
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}


    // findOne( { $and:[ {'participants.user':_id}, {'participants.user':_id}]}).then(existingConversation => {
    //     if (false) {
    //         // we already have a record with the given profile ID
            
    //     } else {
    //         // we don't have a user record with this ID, make a new record!
    //         new User({ 

    //             })
    //             .save()
    //             .then(user => done(null, user));
    //     }
    // });