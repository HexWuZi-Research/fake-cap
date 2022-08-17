function setDate(){
    now = new Date()
    hour = now.getHours()
    minute = now.getMinutes()
    dateStr = new Date().toLocaleString('default', { month: 'short', day: 'numeric' })
    timeStr = 100*hour+minute
    renderDate = document.querySelector('.render-date')
    renderDate.innerHTML = `${dateStr} <br>${timeStr}`
}

window.onload = function(){
    setDate()
}