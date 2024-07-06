fetch('http://localhost:8080/api/user', { 
    
headers: { 
        username: "tyler",
        password: "tyler1"
    }
}).then(async(response)=> { 
    data =  await response.json();
    console.log(data);
})