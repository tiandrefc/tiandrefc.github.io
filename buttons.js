/**
 * Created by Tiago on 29/04/2017.
 */
function showDiv(id) {
    if (document.getElementById(id) !== null)
    {
        document.getElementById(id).style.display = "inline";
    }
}

function desc(texto) {
    document.getElementById("texto").innerHTML = texto;
}
