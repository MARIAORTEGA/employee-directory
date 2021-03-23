import axios from "axios";

export default {
  getRandomDog: function () {
    return axios.get("https://randomuser.me/api/");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breed/");
  },
};
