let genarate = document.getElementById("genarate")
let url;

function getPrompt() {
    let prompt = document.getElementById("prompt").value;
    console.log(prompt); 
   
    
    url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
    

    document.getElementById("ImageResalts").src=url
    document.getElementById("loder").style.display="block"
    
    


}


function template1() {
    const genderSelect = document.getElementById("gender");
    const face = document.getElementById("face").value.trim();
    const vehicle = document.getElementById("vehicle").value.trim();
    const dress = document.getElementById("dress").value.trim();

    let selectGender = "";
    let pronoun = "";

  
    if (genderSelect.value === "") {
        alert("Please select a gender.");
    } 
    
    else if (face === "") {
        alert("Please enter a face description.");
    } 
    
    else if (vehicle === "") {
        alert("Please enter a vehicle.");
    } 
    
    else if (dress === "") {
        alert("Please enter a dress.");
    } 
   
    else {
        if (genderSelect.value === "male") {
            selectGender = "male";
            pronoun = "he";
        } else {
            selectGender = "female";
            pronoun = "she";
        }

        const url_temp = `https://image.pollinations.ai/prompt/A%20hyper-realistic%20image%20of%20a%20${encodeURIComponent(selectGender)},%20${encodeURIComponent(face)}%20from%20Fast%20%26%20Furious%20standing%20calmly%20against%20a%20bright%20${encodeURIComponent(vehicle)}%20in%20an%20urban%20setting.%20${encodeURIComponent(pronoun)}%20wears%20a%20${encodeURIComponent(dress)},%20exuding%20a%20cool%20and%20introspective%20vibe.%20The%20car%20gleams%20with%20detailed%20reflections%20and%20intricate%20textures,%20while%20the%20cityscape%20in%20the%20background%20adds%20a%20gritty,%20cinematic%20atmosphere.%20The%20mood%20is%20composed%20yet%20rebellious%E2%80%94an%20homage%20to%20Han%E2%80%99s%20iconic%20pose%20from%20Tokyo%20Drift.`;

        document.getElementById("ImageResalts").src = url_temp;
        document.getElementById("loder").style.display = "block";
    }

   
}

 function temp1() {
       const link = document.createElement("a");
       link.href = document.getElementById("ImageResalts").src;
       link.download = "image.png";
       document.body.appendChild(link, '_blank');
       link.click();
       document.body.removeChild(link, '_blank');
   }
