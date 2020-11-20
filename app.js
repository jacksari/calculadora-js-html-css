function getContentClick(event) {
    //console.log(event);
    const value = event.target.innerHTML;
    filterAction(value);
}

const filterAction = value => {
    console.log(value)
}
