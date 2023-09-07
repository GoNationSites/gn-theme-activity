let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');

export default async (poweredID) => {
  const data = await axios({
    url: `https://data.prod.gonation.com/pl/get?profile_id=${poweredID}`,
    adapter: jsonpAdapter,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log('error : ', console.log(e));
    });

  return data;
};
