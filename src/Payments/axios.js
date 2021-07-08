import axios from "axios";

const instance = axios.create({

  baseURL: 'https://us-central1-clone-927bb.cloudfunctions.net/api'
  // 'https://us-central1-clone-927bb.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-927bb/us-central1/api'

});

export default instance;
