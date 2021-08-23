const replaceAllStrings = () => {
    let replacedString = document.getElementById("userInput").value;
    for (const box of document.getElementsByClassName("ruleBox")) {
        const inputElems = box.getElementsByTagName("input");
        replacedString = replacedString.split(inputElems[0].value).join(inputElems[1].value);
    }
    document.getElementById("resultOutput").value = replacedString;
}
document.body.addEventListener("input", replaceAllStrings);

document.body.addEventListener("click", e => {
    if(e.target.id === "btnToAddRuleBox" || e.target.classList.contains("crossSymbol")) {
        const newElm = document.createElement("div");
        newElm.classList.add("ruleBox");
        newElm.innerHTML = `
            <input placeholder="置き換えられる文字列">
            <input placeholder="置き換える文字列">
            <button class="btnToDeleteRuleBox">削除</button>
        `;
        document.getElementById("ruleBoxContainer").insertBefore(newElm, document.getElementById("btnToAddRuleBox"));
    } else if(e.target.classList.contains("btnToDeleteRuleBox")) { 
        e.target.parentNode.remove();
        replaceAllStrings()
    
    }
});
