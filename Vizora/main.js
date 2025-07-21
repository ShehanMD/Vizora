let genarate = document.getElementById("genarate")
let url;

function getPrompt() {
    let prompt = document.getElementById("prompt").value;
    console.log(prompt); // Output in console
   
    
    url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
    

    document.getElementById("ImageResalts").src=url
    document.getElementById("loder").style.display="block"
    
    


}

