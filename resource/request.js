
export const get = (endpoint) => {
    
    return new Promise((resolve, reject)=>{
        fetch(`http://ergast.com/api/f1/${endpoint}`).then((response) => resolve(response.json()))
    })
}