const URL = "http://10e5e02b.ngrok.io/CA3/api/"; //ændrer sig muligvis for hver session

class ApiFacade {
  
  fetchData = (index) => {
    return fetch(URL + index);

}
}
const facade = new ApiFacade();

export default facade;