document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        r('loginPage');
        titleBarInit('titleBarRoot');
    }
};
