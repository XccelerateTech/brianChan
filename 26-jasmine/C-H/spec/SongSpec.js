
var Song = require('../Song.js');


beforeEach(function() {
  song1 = new Song('Layla','Layla and Other Assorted Love Songs','Eric Clapton');
  song2 = new Song('bell bottom blues','Layla and Other Assorted Love Songs','Eric Clapton');
  song3 = new Song('cause we ended as lovers','Blow by blow','Stevie Wonder');
  song4 = new Song('Gravity','Continuum','John Mayer');
  song5 = new Song('Waiting on the World to Change','Continuum','John Mayer');
  
  
});

it("should be the name of the song", function() {
  expect(song1.name).toEqual('Layla');
});

it("should be the album of the song", function() {
  expect(song1.album).toEqual('Layla and Other Assorted Love Songs');
});

it("should be the author of the song", function() {
  expect(song1.author).toEqual('Eric Clapton');
});

it("should be the description of the song", function() {
  expect(song1.getDescription()).toBe('The name of this song is Layla and it is from the album Layla and Other Assorted Love Songs. It is written by Eric Clapton');
});

it("should be in the same album", function(){
  expect(song1.isInSameAlbum(song2)).toBe(true);
});

it("should not be in the same album", function(){
  expect(song1.isInSameAlbum(song3)).toBe(false);
})

it("should be in the same album", function(){
  expect(song1).toBeInTheSameAlbumAs(song2);
});



