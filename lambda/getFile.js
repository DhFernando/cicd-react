const Response = require('./API_responses')
const S3 = require('./S3') 

const bucket = process.env.bucketName

exports.handler = async event =>{
    console.log(event)

    if(!event.pathParameters || !event.pathParameters.fileName){
        return Response._400({message : "missing fileName form path"})
    }

    let fileName = event.pathParameters.fileName;
     

    const file = await S3.get(fileName , bucket).catch(err =>{
        console.log('err in S3  get' , err)
        return null
    })

    if(!file){
        return Response._400({message : "Filed to read data by filename"})
    }
 
    return Response._200({file})
}






