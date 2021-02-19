const Response = require('./API_responses')
const S3 = require('./S3')
const { _400 } = require('./API_responses')

const bucket = process.env.bucketName

exports.handler = async event =>{
    console.log(event)

    if(!event.pathParameters || !event.pathParameters.fileName){
        return Response._400({message : "missing fileName form path"})
    }

    let fileName = event.pathParameters.fileName;
    const data = JSON.parse(event.body);

    const newData = await S3.write(data, fileName , bucket).catch(err =>{
        console.log('err in S# write' , err)
        return null
    })

    if(!newData){
        return Response._400({message : "Filed to write data by filename"})
    }

    return Response._200({newData})
}






