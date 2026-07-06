import ErroBase from "./errorBase.js";


class requsicaoIncorreta extends ErroBase{
    constructor(){
        super("Um ou mais paramentros passados para essa requisição são invalidos", 400)
    }
}

export default requsicaoIncorreta;