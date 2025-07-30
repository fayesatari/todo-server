
let data =[];

const gettodos=(req,res)=>{
    
    res.status(200).json(
        {
            'message':'hi from todos',
            'data': data
        });
}

const gettodoadd=(req,res)=>{
    data.push(req.params.var);
    res.status(200).json(
        {
            'message':'hi from todoadd',
            'new item': req.params.var
        });
}

const todoController=  {
    gettodos,
    gettodoadd
}

export default todoController;