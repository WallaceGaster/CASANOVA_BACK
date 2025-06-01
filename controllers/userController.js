


// OBTENER USUARIO POR ID
exports.getUserById = async(req,res) => {
    const userId = req.body.id;
    try{
        const usuarios = await User.findById(userId);
        if (!usuarios) {
        console.log("lead no encontrado")
        res.json(null);
        return
        }
        res.json(usuarios.username);
    }
    catch(error){
        res.json(null);
    }
}

// AUTENTICAR UN USUARIO
exports.authUser = async(req,res)=> {
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username,password});
        if(!user){
            res.status(404).json({msg:'No existe el usuario'});
        }
        else{
            res.json(user)
        }
        
    } 
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
