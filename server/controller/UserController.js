const User = require("../model/users");
const fs = require("fs");
async function addUser(req, res){
    const user=new User({
        fullName:req.body.fullName,
        email:req.body.email,
        phone:req.body.phone,
        country:req.body.country,
        state:req.body.state,
        zipCode:req.body.zipCode,
        image:req.file.filename,
    });
    await user.save((err)=>{
        if(err){
            res.json({message:err.message, type:'danger'})
        }
        else{
            console.log('User Successfully Added to database')
        };
        res.redirect('/');
    })
}

async function deleteUser(req,res){
    let id=req.params.id;
    await User.findByIdAndRemove(id, (err,result)=>{
        if(result.image != ''){
            try{
                fs.unlinkSync('../uploads/'+result.image);
            } catch(err){
                console.log(err);
            }
        }
        if(err){
            res.json({message:err.message});
        }else{
            console.log("Record deleted successfully")
        };
        res.redirect("/");
    })
}

function getAllUsers(req, res) {
    User.find().exec((err,users)=>{
        if(err){
            res.json({message:err.message});
        }else{
            res.render("index",{
                users:users,
            });
        }
    });
}

function editUser(req,res){
    //getting id from url
    let id=req.params.id;
    User.findById(id,(err,user)=>{
        if(err){
            res.redirect('/');
        }
        else{
            if(user==null){
                res.redirect('/');
            }
            else{
                res.render('/',{
                    user:user,
                });
            }
        }
    });
}


module.exports = {addUser, deleteUser, getAllUsers, editUser};
