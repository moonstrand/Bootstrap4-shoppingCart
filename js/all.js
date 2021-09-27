$(document).ready(function () {
    // modal
    $('#deleteModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var title = button.data('title')
        var modal = $(this)
        modal.find('.modal-title').text(title)
    })

    // top滾動
    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1200);
    });
});

// 表單驗證
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();