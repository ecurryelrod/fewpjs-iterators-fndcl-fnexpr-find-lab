const superbowlWin = (array) => {
    let result = array.find(elem => elem.result === "W");
    return !!result ? result.year : undefined
}
