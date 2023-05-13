function emailCopy() {
    let mailText = "tchon@ucsd.edu" // Can change later
    navigator.clipboard.writeText(mailText);
    let tooltip = document.getElementById('emailToolTip');
    if(tooltip.lang == "jp") {
        tooltip.innerHTML = "クリップボードにtchon@ucsd.eduをコピー完了"
    }
    else {
        tooltip.innerHTML = "Copied tchon@ucsd.edu to clipboard";
    }
}   

function emailOut() {
    let tooltip = document.getElementById('emailToolTip');
    if (tooltip.lang == "en") {
        tooltip.innerHTML = "Copy tchon@ucsd.edu to clipboard";
    }
    else {
        tooltip.innerHTML = "クリップボードにtchon@ucsd.eduをコピーする"
    }
}

function phoneOut() {
    let tooltip = document.getElementyById('phoneToolTip');
    tooltip.innerHTML = "+1-858-752-2709";
}