function removecolor() {
    let select = document.getElementById("colorSelect");
    let option = select.getElementsByTagName("option")[0];
    let remove = select.removeChild(option)
    /*
    let p = document.getElementsByTagName("p").innerHTML = remove;
    window.alert(`${p} is removed`);
    */
    console.log(remove)
   




}
