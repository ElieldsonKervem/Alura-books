//mongodb+srv://elieldsonsouza_db_user:<db_password>@nodedb.69ouyzg.mongodb.net/?appName=NodeDB

import mongoose from "mongoose";


async function databaseConnection(){
  mongoose.connect(process.env.DB_CONNECTION_STRING); 

  return mongoose.connection;
}

export default databaseConnection

//tenha muito cuidado com o string na conexão 