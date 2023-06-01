const OPTIONS = {
    method: 'GET',
    params: {
      apikey: '873dbe322aea47f89dcf729dcc8f60e8'
    },
    headers: {
      'X-RapidAPI-Key': 'e9f7b24137msh68abc1f210c4b2cp1eb71cjsn16d64da84b6c',
      'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
    }
  }


  const fetchIpInfo = ip => {
    return fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation/ ${ip}`)
    .then(res => res.json())
    .catch(err => console.error(err))
  }