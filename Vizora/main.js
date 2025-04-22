let genarate = document.getElementById("genarate")
let url;

function getPrompt() {
    let prompt = document.getElementById("prompt").value;
    console.log(prompt); // Output in console
   
    let width = document.getElementById("widthIMG").value;
    let height = document.getElementById("heightIMG").value;
    if (width.value & height.value == 0) {
        alert("Plese enter Width & Height");
        url = `#`;
        window.location.href = url;
    }
    let url = `https://stabledifffusion.com/imagen/${encodeURIComponent(prompt)}?width=${encodeURIComponent(width)}&height=${encodeURIComponent(height)}`;
    

    document.getElementById("ImageResalts").src=url
    document.getElementById("loder").style.display="block"
    
    


}

