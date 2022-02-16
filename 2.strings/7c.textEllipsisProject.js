function getDescription(text){
    console.log(text);
    if (text.length < 10){
        return text;
    } else {
        return `${text.substring(0, 10)}...`;
    }
}
