document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();
    
    let name = document.querySelector('input[type="text"]').value;
    let roll = document.querySelector('input[type="number"]').value;

    if(name && roll){
        alert("Student Added Successfully!");
    } else {
        alert("Please fill all fields.");
    }
});
