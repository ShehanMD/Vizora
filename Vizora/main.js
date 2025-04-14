let genarate = document.getElementById("genarate")


function getPrompt() {
    let prompt = document.getElementById("prompt").value;
    console.log(prompt); // Output in console
    alert(prompt); // Show in alert box
    let width = document.getElementById("widthIMG").value;
    let height = document.getElementById("heightIMG").value;
    if (width.value & height.value == 0) {
        alert("Plese enter Width & Height");
        let url = `#`;
        window.location.href = url;
    }
    let url = `https://stabledifffusion.com/imagen/${encodeURIComponent(prompt)}?width=${encodeURIComponent(width)}&height=${encodeURIComponent(height)}`;
    window.location.href = url;

}
