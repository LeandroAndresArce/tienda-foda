const fetchSimulation = (dataBase, time) =>{
    return new Promise((resolve,rejact)=>{
        setTimeout(()=>{
            resolve(dataBase);
            rejact(new Error("algo salio mal"))
        })
    }, time)
}

export default fetchSimulation;