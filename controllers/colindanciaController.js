const Colindancia = require("../models/Colindancia");

exports.addColindancia = async(req,res)=>{
    try{
        let colindancia;
        console.log(req.body,"Info");
        colindancia = new Colindancia(req.body);
        await colindancia.save();
        res.send(colindancia);
    }
    catch(error){
        console.log("Hubo un problema",error);
    }
} 

exports.getColindanciaById = async(req , res) => {
    try {
        const colindancia = await Colindancia.findById(req.params.id);
        if (!colindancia) {
            return res.status(404).json({ message: 'Colindancia no encontrada' });
        }
        res.json(colindancia);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
}


exports.getColindanciasById = async (req, res) => {
    try {
        const { id } = req.params; // Obtén el ID del parámetro de la solicitud
        console.log("se va a buscar" + id);
        // Busca todas las colindancias que tengan el ID proporcionado
        const colindancias = await Colindancia.find({ id_inventario: id });

        if (colindancias.length === 0) {
            return res.status(404).json({ message: "No se encontraron colindancias con el ID proporcionado" });
        }

        res.json(colindancias); // Envía las colindancias encontradas como respuesta
    } catch (error) {
        console.error("Hubo un problema:", error);
        res.status(500).json({ message: "Hubo un problema al buscar las colindancias" });
    }
}

exports.postColindanciaById = async(req,res) => {
    try{
        let colindancia = await Colindancia.findById(req.body._id);
        if (!colindancia) {
            console.log('Colindancia no encontrada')
            return res.status(404).json({ message: 'Inventario no encontrada' });
           
        }
        colindancia.id_inventario=req.body.id_inventario;
        colindancia.manzanac=req.body.manzanac;
        colindancia.lotec=req.body.lotec;
        colindancia.metros=req.body.metros;
        colindancia.direccion=req.body.direccion;
        colindancia.nombreCalle= req.body.nombreCalle;
        await colindancia.save();
        res.send(colindancia);
    }
    catch(error){
        console.log("Hubo un problema",error);
    }
}
