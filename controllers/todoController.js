

const gettodos=(req,res)=>{
    res.status(200).json({'message':'hi from todos'});
}

const gettodoadd=(req,res)=>{
    res.status(200).json({'message':'hi from todoadd'});
}

const todoController=  {
    gettodos,
    gettodoadd
}

export default todoController;