$.getJSON("pizza.json", function (data) {
    let dataPizza = data.menu
    $.each(dataPizza, function (i, data) {
        $('#daftar-menu').append('<div class="col-lg-4 d-flex justify-content-center"><div class="card mb-5" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><p>Rp. ' + data.harga + ',-</p><a href="#" class="btn btn-primary">Beli Sekarang</a></div></div></div>');
    })
});


$('.nav-link').on('click', function (e) {
    console.log(e)
    $('.nav-link').removeClass('active')
    $(e.target).addClass('active')
    let isiNav = $(e.target).html()
    $('#h1').html(isiNav)

    if (isiNav == 'All Menu') {
        $.getJSON("pizza.json", function (data) {
            let dataPizza = data.menu
            $.each(dataPizza, function (i, data) {
                $('#daftar-menu').append('<div class="col-lg-4 d-flex justify-content-center"><div class="card mb-5" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><p>Rp. ' + data.harga + ',-</p><a href="#" class="btn btn-primary">Beli Sekarang</a></div></div></div>');
            })
        });
        return;
    }

    $.getJSON("pizza.json", function (data) {
        let dataPizza = data.menu
        let content = ''


        $.each(dataPizza, function (i, data) {
            if (data.kategori == isiNav.toLowerCase()) {
                content += '<div class="col-lg-4 d-flex justify-content-center"><div class="card mb-5" style="width: 18rem;"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><p>Rp. ' + data.harga + ',-</p><a href="#" class="btn btn-primary">Beli Sekarang</a></div></div></div>'
            }

            $('#daftar-menu').html(content)



        })


    });

})


