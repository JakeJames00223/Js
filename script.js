const myURL = 'https://www.api-dev.tripitizi.com/';

const getAPIResponse = async()=> {
try{
    const response = await fetch (`${myURL}/health` , 
        {method : 'GET'});

        const data = await response.json();
        console.log(data);

}catch (error){
    
}
}


document.getElementById("btn").addEventListener("click" , function darkMode(){
    document.body.classList.toggle("dark-mode");
})
document.getElementById("sbm").addEventListener("click" , function (){
    var myName = document.getElementById("username").value;
    var myEmail = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const url = 'welcome.html?username=' + encodeURIComponent(myName) + '&email=' + encodeURIComponent(myEmail);


    if (email && username && password){
        window.open(url , '_blank');
    }else {
        alert('Please fill in all the fields');
    }


    console.log("your name is:" , myName , "your email address is :" ,  myEmail,"your password is :", password);
})





