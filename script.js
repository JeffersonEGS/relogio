function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    const date = now.toLocaleDateString('PT-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('period').textContent = period;
    document.getElementById('date').textContent = date;
  }
  
  updateTime();
  setInterval(updateTime, 1000);