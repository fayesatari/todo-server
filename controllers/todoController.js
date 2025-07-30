
let count =0;

const gettodos=(req,res)=>{
    
    res.status(200).json(
        {
            'message':'hi from todos',
            'count': count
        });
}

const gettodoadd=(req,res)=>{
    count++;
    res.status(200).json(
        {
            'message':'hi from todoadd'
        });
}

const todoController=  {
    gettodos,
    gettodoadd
}

export default todoController;