let genarate = document.getElementById("genarate")


function getPrompt() {
    let prompt = document.getElementById("prompt").value;
    console.log(prompt); // Output in console
    alert(prompt); // Show in alert box
    let url = `https://stabledifffusion.com/imagen/${encodeURIComponent(prompt)}?width=1024&height=1024`;
    window.location.href = url; 

}
