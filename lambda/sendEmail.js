const Response = require('./API_responses')
const AWS = require('aws-sdk')

const SES = new AWS.SES()

exports.handler = async event =>{
    console.log(event)
    const { to, from , subject, text } = JSON.parse(event.body)

    if(!to || !from || !subject || !text){
        return Response._400({ message : 'to, from , subject, text is required' })
    }

    const params = {
        Destination:{
            ToAddresses:[to]
        },
        Message:{
            Body:{
                Text:{ Data: text }
            },
            Subject: { Data : subject }
        },
        Source: from
    }
    try{
      await SES.sendEmail(params).promise() 
      return Response._200({message : 'E-mail send successfully :)'}) 
    }catch(e){
        return Response._400({message : 'Faild to send E-mail :(' , err : e}) 
    }
    

}