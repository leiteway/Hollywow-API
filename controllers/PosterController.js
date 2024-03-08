import Poster from "../models/PosterModel.js"

//GET
export const getAllPosters = async (request, response) => {
   
    try {
    const posters = await Poster.findAll()
    response.status(200).json(posters);
}
catch(error){
    response.json({message: error.message})
}

}

//GET BY ID


//DELETE
export const deletePoster = async (request, response) => {
    try {
        await Poster.destroy({
            where: { id : request.params.id}
        })
        response.status(200).json({
            message:'Se elimino correctamente'
        });
    } catch (error) {
        response.json({message: error.message})
    }
}

//POST

export const createPoster = async(request,response)=>{
    try {
        await  Poster.create({
            name : request.body.name,
            director : request.body.director,
            year: request.body.year,
            imageUrl: request.body.imageUrl,
        })
        
        response.status(201).json({
            message:"El poster se creo con éxito",
        });
    } catch (error) {

        response.json({message: error.message})
    }
    
}

//UPDATE

export  const updatePoster=async (request,response)=> {
    try {
        await Poster.update({
            where: { id : request.params.id}
        })
    } catch (error) {
        
    }
}