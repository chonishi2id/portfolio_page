function emailCopy() {
    let mailText = "tchon@ucsd.edu" // Can change later
    navigator.clipboard.writeText(mailText);
    let tooltip = document.getElementById('emailToolTip');
    tooltip.innerHTML = "Copied tchon@ucsd.edu to clipboard";
}   

function emailOut() {
    let tooltip = document.getElementById('emailToolTip');
    tooltip.innerHTML = "Copy tchon@ucsd.edu to clipboard";
}

function phoneOut() {
    let tooltip = document.getElementyById('phoneToolTip');
    tooltip.innerHTML = "+1-858-752-2709";
}