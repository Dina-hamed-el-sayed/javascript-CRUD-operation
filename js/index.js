var bookNameInput = document.getElementById("bookName")
var bookUrlInput = document.getElementById("siteUrl")
var searchInput = document.getElementById("searchInput")

var bookList= [] ;

if(localStorage.getItem("bookContainer")!== null){
    bookList= JSON.parse(localStorage.getItem("bookContainer"));
displayData();
}

function addBook(){
    var  book = {
        name: bookNameInput.value,
        url: bookUrlInput.value,
    }
bookList.push(book);
localStorage.setItem("bookContainer", JSON.stringify(bookList))

displayData()
clearForm()

    console.log(bookList);
}

function  clearForm(){
 bookNameInput.value = null;
bookUrlInput .value = null;
}


function displayData (){

    var storage=""; 

    for(var i = 0 ; i < bookList.length ;i++ ){
        storage+= `<tr class=" text-center">
        <td class="fw-bold">${i+1}</td>
        <td class="fw-bold">${ bookList[i].name }</td>
        <td><button onclick="visitUrl('${bookList[i].url}')" class="btn  tablebtn1"><i class="fa-regular fa-eye"></i> visit</button></td>
        <td><button onclick ="deleteItem(${i})" class="btn tablebtn2"><i class="fa-solid fa-trash-can"></i> delete</button></td>

    
    </tr>
  `


    }

    document.getElementById("tablaData").innerHTML = storage;
}

function deleteItem(indexItem){
    bookList.splice(indexItem,1);
    localStorage.setItem("bookContainer", JSON.stringify(bookList));
    displayData();
}


function visitUrl(url) {
    window.open(url, '_blank');
}


function searchItem (){
var term =searchInput.value; 

var storage=""; 

    for(var i = 0 ; i < bookList.length ;i++ ){
        if(bookList[i].name.toLowerCase().includes(term.toLowerCase())){
            storage+= `<tr class=" text-center">
            <td class="fw-bold">${i}</td>
            <td class="fw-bold">${ bookList[i].name }</td>
            <td><button onclick="visitUrl('${bookList[i].url}')" class="btn  tablebtn1"><i class="fa-regular fa-eye"></i> visit</button></td>
            <td><button onclick ="deleteItem(${i})" class="btn tablebtn2"><i class="fa-solid fa-trash-can"></i> delete</button></td>
    
        
        </tr>
      `
        }


    }

    document.getElementById("tablaData").innerHTML = storage;
}