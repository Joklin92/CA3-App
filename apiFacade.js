const URL = "http://d087c4a7.ngrok.io/CA3/api/"; //ændrer sig muligvis for hver session
//const URL = "http://172.19.226.161:8084/CA3/api/starships";

class ApiFacade {
  
  fetchData = (index) => {
    return fetch(URL + index);

}
}
const facade = new ApiFacade();

export default facade;