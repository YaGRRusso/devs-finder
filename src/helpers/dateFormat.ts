const formatDate = (date: number) => {
    if (date < 10) {
        return `0${date}`
    } else {
        return date
    }
}

export const fullDate = (date: string) => {
    const newDate = new Date(date)
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${formatDate(day)}/${formatDate(month)}/${year}`
}