function setDate(){
    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var dateStr = new Date().toLocaleString('default', { month: 'short', day: 'numeric' })
    var timeStr = 100*hour+minute
    var renderDate = document.querySelector('.render-date')
    renderDate.innerHTML = `${dateStr} <br>${timeStr}`
}

function clickUploadImage(){
    var photo = document.querySelector('.photo')
    var fileUpload = document.querySelector('.photo > input')
    var img = document.querySelector('.photo > img')
    photo.onclick = function(){
        fileUpload.click()
    }
    fileUpload.onchange = function(e){
        img.src = URL.createObjectURL(e.target.files[0])
    }
}

window.onload = function(){
    setDate()
    clickUploadImage()
}