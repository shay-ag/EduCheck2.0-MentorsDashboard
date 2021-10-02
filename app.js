const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('keyup', (event) => {
    const searchedString = event.target.value;

    const filter = searchedString.toUpperCase();

    const title = document.getElementsByClassName("title");

    for( let i=0; i < title.length; i++ ){

        const txtValue = title[i].textContent || title[i].innerText;

        const parentcard = document.getElementsByClassName("row");
        
        const card = parentcard[0].children[i];

        if(txtValue.toUpperCase().indexOf(filter) > -1){
            card.style.display = "";
        } else{
            card.style.display = "none";
        }

    }
    
});