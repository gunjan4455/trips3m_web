export default () => {
  self.addEventListener('message', (ev) => {

    switch (ev.data.type){
      case 'UPDATE ALIVE STATUS' : {
        self.callApi = setInterval(() => {
          fetch(ev.data.url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'X-CLIENT-API-TOKEN': ev.data.apiKey
            }
          });
        }, 20000);
        break;
      }
      case 'CLEAR ALIVE STATUS' : {
        return clearInterval(self.callApi);
      }
    }
  });

};
