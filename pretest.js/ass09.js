function digitalClock(sec){
    let hour = Math.floor(sec/3600);
    const min = Math.floor((sec%3600)/60);
    const s = sec % 60
    hour %= 24;
    const fh = String(hour).padStart(2,'0');
    const fm = min<10?'0'+min:min
    const fs = String(s).padStart(2,'0');

    return `"${fh}:${fm}:${fs}"`

}
console.log(digitalClock(87000));