
var Song = require('./Song.js');
var song;

beforeEach(function() {
  song = new Song('Layla','Layla and Other Assorted Love Songs','Eric Clapton');
});

it("should be the name of the song", function() {
  expect(song.name).toEqual('Layla');
});

it("should be the album of the song", function() {
  expect(song.album).toEqual('Layla and Other Assorted Love Songs');
});

it("should be the author of the song", function() {
  expect(song.author).toEqual('Eric Clapton');
});

it("should be the description of the song", function() {
  expect(song.getDescription()).toBe('The name of this song is Layla and it is from the album Layla and Other Assorted Love Songs. It is written by Eric Clapton');
});
