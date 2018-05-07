import axios from 'axios';

function calltow() {
    axios.post('http://127.0.0.1:8000/calltow/', {
        latitude: this.state.center.lat,
        longitude: this.state.center.lng,
        address: this.state.address
      })
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = calltow();