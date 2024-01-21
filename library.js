const library = [];

function Book(){
    let name = prompt("enter name")
    return name;
}
function addToLibrary(){
    library.push(Book())
    console.log(library)
}
addToLibrary()