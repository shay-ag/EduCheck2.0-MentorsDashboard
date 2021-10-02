console.log("hello");

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('keyup', (event) => {
    const searchedString = event.target.value;

    const filter = searchedString.toUpperCase();

    const title = document.getElementsByClassName("title");

    for( let i=0; i < title.length; i++ ){

        const txtValue = title[i].textContent || title[i].innerText;

        const card = document.getElementsByClassName("card");
        
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            card[i].style.display = "";
        } else{
            card[i].style.display = "none";
        }
    }
    
});