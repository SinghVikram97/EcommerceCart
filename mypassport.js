const passport=require('passport');
const {User}=require('./db/models');
const LocalStrategy=require('passport-local');


passport.serializeUser((user,done)=>{

    if(!user.id){
        return done(new Error('User has no ID'));
    }

    done(null,user.id);

});


passport.deserializeUser((userId,done)=>{

    User.findOne({
        where:{id:userId}
    }).then((user)=>{
        if(!user){
            return done(new Error("No User found"));
        }

        done(null,user);
    }).catch((err)=>done(err));

});

passport.use(new LocalStrategy((username,password,done)=>{

    User.findOne({
        where:{username:username}
    }).then(user=>{

        // Username doesn't exist
        if(!user){
          return done(null,false);
        }

        // In production use password hashes, do not save in db
        if(user.password!==password){

            // Password mismatch
            return done(null,false);
        }
        else{
            return done(null,true);
        }
    }).catch((err)=>done(err));

}));


module.exports=passport;