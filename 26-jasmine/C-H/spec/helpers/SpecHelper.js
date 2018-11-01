beforeEach(function () {
    jasmine.addMatchers({
        toBeInTheSameAlbumAs: function () {
        return {
          compare: function (song1, song2) {
            
            return {
              pass: song1.album === song2.album
            }
          }
        };
      }
    });
  });
  