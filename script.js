
function showNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
    }, 10000);
}       
