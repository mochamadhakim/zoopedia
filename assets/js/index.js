


$("#add_hewan").submit(function(event){
    alert("Data Berhasil Ditambahkan!");
})

$("#update_hewan").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Berhasil di Update");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Apakah kamu yakin akan menghapus data Hewan ini?")){
            $.ajax(request).done(function(response){
                alert("Data Berhasil di Hapus");
                location.reload();
            })
        }

    })
}