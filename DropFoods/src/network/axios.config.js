import axios from 'axios'

export const APIController = axios.create({
    baseURL: 'https://example.com/api/v1' , //LIVE
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const doPayment = (amount, tokenId, accessToken) => {
    const body = {
      amount: amount,
      tokenId: tokenId,
    //   currency:'usd',
    //   source:tokenId,
    //   description:"Charge for jenny.rosen@example.com"
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    console.log(body)
    return axios
      .post('http://localhost:8080/api/doPayment', body, { headers })
      .then(({ data }) => {
          console.log(data)
        return data;
      })
      .catch(error => {
        return Promise.reject('Error in making payment', error);
      });
  };
