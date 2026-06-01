const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxebYpT1laX8W2KkE8OFim1xrWK2FGCUNfA_ZlSGxdHolLI-CdxwrDOdZ5y5iLAWykaXw/exec";

async function kirimUcapan() {

    const nama =
    document.getElementById("nama").value;

    const ucapan =
    document.getElementById("ucapan").value;

    if(nama === "" || ucapan === ""){
        alert("Isi nama dan ucapan dulu ya 💗");
        return;
    }

    try {

        await fetch(SCRIPT_URL,{
            method:"POST",
            body:JSON.stringify({
                nama:nama,
                ucapan:ucapan
            })
        });

        alert("Ucapan berhasil dikirim 💌");

        document.getElementById("nama").value = "";
        document.getElementById("ucapan").value = "";

    } catch(error){

        alert("Terjadi kesalahan, coba lagi.");

    }

}
