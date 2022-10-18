$(document).ready(function(){
    var soal;
    var j = 0;
    var k = 1;

    for(var i = 0; i < 120; i++){
        k++;
        if(i % 12 == 0){
            j += 1; 
            k = 1;
        }
        $(".board").append('<div class="grid-item grid-black g'+j+k+'"></div>'); 
    }

    var soal = [
        [1, "menurun", 6, 1, 9, "TAKJIL"],
        [2, "menurun", 7, 2, 6, "TADHRUS"],
        [3, "menurun", 9, 2, 11, "EIDALFITR"],
        [2, "mendatar", 7, 2, 6, "TARAWEH"],
        [4, "mendatar", 7, 5, 1, "RAMADHA"],
        [5, "mendatar", 4, 7, 4, "HAUS"],
        [6, "mendatar", 5, 10, 7, "SAHUR"],
    ]

    var columntest;
    for(i=0 ; i < 7; i++){
        columntest = soal[i][3];
        rowtest = soal[i][4];
        // $('.g'+columntest+rowtest).append('<p class="no-soal">'+soal[i][0]+'</p>');
        // $('.g'+columntest+rowtest).append('<p class="no-soal"></p>').text(soal[i][0]);
        $('.g'+columntest+rowtest).append('<p class="no-soal p-isi" id="no'+i+'"></p>');
        $('#no'+i).text(soal[i][0]);
        if(soal[i][1] == "mendatar"){
            for(l = 0; l < soal[i][2]; l++){
                $('.g'+columntest+rowtest).removeClass("grid-black");
                rowtest += 1;
            }
        }else if(soal[i][1] == "menurun"){
            for(l = 0; l < soal[i][2]; l++){
                $('.g'+columntest+rowtest).removeClass("grid-black");
                columntest += 1;
            }
        }else{
            console.log("error");
        }
    }

    for(var i = 0; i < soal.length; i++){
        $("#select-soal").append('<option value='+i+'>'+soal[i][0]+'. '+soal[i][1]+'</option>'); 
    }

    
    $("#submit-isian").click(function(){
        pilih = parseInt($("#select-soal :selected").val());
        jawaban = $("#form-isian").val().toLowerCase();
        columntest = soal[pilih][3];
        rowtest = soal[pilih][4];

        var res = isi[pilih].join('').toLowerCase();
        console.log(res);

        if(jawaban != res){
            alert("Jawaban Anda Salah");
        }else{
            if(soal[pilih][1] == "mendatar"){
                for(l = 0; l < isi[pilih].length; l++){
                    // $('.g'+columntest+rowtest).append('<p class="p-isi">'+isi[pilih][l]+'</p>');
                    // $('.g'+columntest+rowtest).text(isi[pilih][l]);
                    $('.g'+columntest+rowtest).text(soal[pilih][5].charAt(l));
                    
                    rowtest += 1;
                }
            }else if(soal[pilih][1] == "menurun"){
                for(l = 0; l < isi[pilih].length; l++){
                    // $('.g'+columntest+rowtest).append('<p class="p-isi">'+isi[pilih][l]+'</p>');
                    // $('.g'+columntest+rowtest).text(isi[pilih][l]);
                    $('.g'+columntest+rowtest).text(soal[pilih][5].charAt(l));
                    columntest += 1;
                }
            }else{
                alert("error");
            }
        } 
    });
});