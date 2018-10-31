function Song(name,album,author) {
    this.name = name;
    this.album = album;
    this.author = author;

    this.getDescription = ()=>{
        return (`The name of this song is ${name} and it is from the album ${album}. It is written by ${author}`)
    }
}


module.exports = Song;
