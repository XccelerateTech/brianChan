function Song(name,album,author) {
    this.name = name;
    this.album = album;
    this.author = author;

    this.getDescription = ()=>{
        return (`The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`)
    };
    this.isInSameAlbum = (otherSong)=>{
        if (this.album === otherSong.album){
            return true;
        } else return false;
    }
}


module.exports = Song;
