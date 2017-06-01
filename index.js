/**
 * Created by weimin on 2017/6/1.
 */
window.onload = function () {
    var aPicIndex = document.getElementsByClassName('header-index');
    var aPic = document.getElementsByClassName('header-pic');
    var oIndexBox = document.getElementById('header-index-box');
    var i = 0;

    for (i = 0; i < aPicIndex.length; i++) {
        aPicIndex[i].index = i;

        aPicIndex[i].onclick = function () {
            for (var j = 0; j < aPicIndex.length; j++) {
                aPic[j].style.zIndex = 1;
            }
            aPic[this.index].style.zIndex = 2;
            oIndexBox.style.zIndex = 3;
        }
    }

}
