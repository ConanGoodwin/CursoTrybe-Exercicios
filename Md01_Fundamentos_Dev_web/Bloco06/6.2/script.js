const button = document.querySelector('.btn-warning');
console.log(button);

const myModal = new bootstrap.Modal(document.getElementById('myModal'));

button.addEventListener('click', function() {
    myModal.show();
});
