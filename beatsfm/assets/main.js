async function stats() {
    fetch('https://api.beatsfm.xyz/stats').then(data => data.json()).then(res => {
        $(".dj-says").text(`${res.dj.djsays}`)
        $(".dj").text(`${res.dj.name}`)
        $(".title").text(`${res.song.title}`)
        $(".artist").text(`${res.song.artist}`)
        $('.dj-pfp').attr('src', res.dj.avatar)
    });
}
stats();
setInterval(stats, 2500)
