const URL = 'https://api.github.com/users/riyofirsan2/followers'
fetch (`${URL}`).then (res =>{
    return res.json()
}).then (data =>{
    console.log(data);
})