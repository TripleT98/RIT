import axios from "axios";

const baseURI = "https://swapi.dev/api/";

function getData(page, type){
  page = page || "";
  return axios.get(baseURI + type + "/", {params:{page}})
}

function getPlanetResidents(planet){
  return axios.get(baseURI + "planets/" + planet)
  .then((data)=>{return data.data.residents});
}

function getResident(url){
  return axios.get(url);
}

export default {
  getData,getPlanetResidents,getResident
}
