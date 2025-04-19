document.getElementById("barcode").addEventListener("keydown",function(event){
    if (event.key==="Enter"){
        event.preventDefault();
        document.getElementById("qty").focus();
    }
});
document.getElementById("barcode1").addEventListener("keydown",function(event){
  if (event.key==="Enter"){
    event.preventDefault();
    document.getElementById("qty1").focus();
  }
});