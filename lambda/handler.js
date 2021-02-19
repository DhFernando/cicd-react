const connection = require("./connection");

'use strict';

module.exports.hello = async (event) => {
  let conn;
  try{
    conn = await connection.createConnection();
    const db = await connection.getDbConnection(conn);

    db.collection("uses").insert( { item: "card", qty: 15 } )

    console.log(db)
    
    return {
        statusCode: 200,
        body: JSON.stringify(
          { message: 'successfully!' } 
        ),
      };
  }catch(e){
    return {
      statusCode: 500,
      body: JSON.stringify(
        { message: 'Faild!' } 
      ),
    };
  }

  
};
