function forLoop () {
    const list = document.getElementsByClassName("all-items");
    console.log(list);
    console.log([].forEach.call(list, getElementsByTagName("li").length - 1));

    
}

forLoop();