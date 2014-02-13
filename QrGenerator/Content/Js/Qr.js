/*document*/
$(document).ready(
    function () {
        QrLinkGenerator();
    }
    );
/*----------------------------------------------------------------------------------------------------------------*/



function Download(Src)
{
    $('#download').attr({
        target: '_blank',
        href: Src
    });
}




/*----------------------------------------------------------------------------------------------------------------*/
/*Link*/
$('#Link input[type=button]').click(function () {
    
    QrLinkGenerator();
});

/*fn Link*/
function QrLinkGenerator()
{
    chl = $('#Link input[name=Url]').val();
    width = $('#Link input[name=Width]').val();
    height = $('#Link input[name=Height]').val();
    Src = "https://chart.googleapis.com/chart?cht=qr&chs=" + width + "x" + height + "&chl=" + chl + "";

    $('#qr').attr('src', Src);

    Download(Src);
    
    

    $('#qr').load(function () {
        $(this).fadeIn(1000, "linear");
    });
}
/*----------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------*/
/*Mail*/
$('#Mail input[type=button]').click(function () {

    QrMailGenerator();
});

/*fn Link*/
function QrMailGenerator() {
    chl = $('#Mail input[name=MailAdress]').val();
    width = $('#Mail input[name=Width]').val();
    height = $('#Mail input[name=Height]').val();
    Src = "https://chart.googleapis.com/chart?cht=qr&chs=" + width + "x" + height + "&chl=" + chl + "";

    $('#qr').attr('src', Src);

    Download(Src);

    $('#qr').load(function () {
        $(this).fadeIn(1000, "linear");
    });
}
/*----------------------------------------------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------------------------------------------*/
/*Tel*/
$('#Tel input[type=button]').click(function () {

    QrTelGenerator();
});

/*fn Link*/
function QrTelGenerator() {
    chl = $('#Tel input[name=Tel]').val();
    width = $('#Tel input[name=Width]').val();
    height = $('#Tel input[name=Height]').val();
    Src = "https://chart.googleapis.com/chart?cht=qr&chs=" + width + "x" + height + "&chl=" + chl + "";

    $('#qr').attr('src', Src);

    Download(Src);

    $('#qr').load(function () {
        $(this).fadeIn(1000, "linear");
    });
}
/*----------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------*/
/*Sms*/
$('#Sms input[type=button]').click(function () {

    QrSmsGenerator();
});

/*fn Link*/
function QrSmsGenerator() {
    chl = $('#Sms input[name=Tel]').val();
    Mesaj = $('#Sms input[name=Mesaj]').val();
    width = $('#Sms input[name=Width]').val();
    height = $('#Sms input[name=Height]').val();
    Src = "https://chart.googleapis.com/chart?cht=qr&chs=" + width + "x" + height + "&chl=smsto%3A" + chl + "%3A" + Mesaj + "";

    $('#qr').attr('src', Src);

    Download(Src);

    $('#qr').load(function () {
        $(this).fadeIn(1000, "linear");
    });
}
/*----------------------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------*/
/*VCARD*/
$('#Card input[type=button]').click(function () {

    QrCardGenerator();
});

/*fn Link*/
function QrCardGenerator() {

    Encoding = $('#Card input[name=Encoding]').val();
    Ad = $('#Card input[name=Ad]').val();
    Sirket = $('#Card input[name=Sirket]').val();
    Baslik = $('#Card input[name=Baslik]').val();
    Tel = $('#Card input[name=Tel]').val();
    MailAdres = $('#Card input[name=MailAdres]').val();
    Adres = $('#Card input[name=Adres]').val();
    Adres2 = $('#Card input[name=Adres2]').val();
    Url = $('#Card input[name=Url]').val();
    Not = $('#Card input[name=Not]').val();

    width = $('#Card input[name=Width]').val();
    height = $('#Card input[name=Height]').val();
    

    if (Encoding == "VCARD") {
        Src = "https://chart.googleapis.com/chart?cht=qr&chs=" + width + "x" + height +
            "&chl=BEGIN%3AVCARD%0AN%3A" + Ad +
            "%0AORG%3A" + Sirket +
            "%0ATITLE%3A" + Baslik +
            "%0ATEL%3A" + Tel +
            "%0AURL%3A" + Url +
            "%0AEMAIL%3A" + MailAdres +
            "%0AADR%3A" + Adres + Adres2 +
            "%0ANOTE%3A" + Not + "%0AEND%3AVCARD";
    }

    $('#qr').attr('src', Src);

    Download(Src);

    $('#qr').load(function () {
        $(this).fadeIn(1000, "linear");
    });
}
/*----------------------------------------------------------------------------------------------------------------*/

