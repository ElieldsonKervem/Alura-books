import "dotenv/config"
import app from './src/app.js';
const PORT = 3032



//variavel que gurda todo os dados

app.listen(PORT,()=>{
    console.log('Servidor rodando')
})
//Listen está ouvindo tudo

//rotas são indereços http de links de rotas com dados dentro