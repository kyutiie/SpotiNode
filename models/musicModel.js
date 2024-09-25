const db = require('../config/db');

const MusicModel = {
    getAllSongs: (callback) => {
        db.query('SELECT * FROM songs', callback);
    },
    addSong: (song, callback) => {
        db.query('INSERT INTO songs SET ?', song, callback);
    },
    getSongById: (id, callback) => {
        const query = 'SELECT * FROM songs WHERE id = ?';  
        db.query(query, [id], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result[0]);  
        });
    },
    
    editSong: (id, song, callback) => {
        const query = `
            UPDATE songs 
            SET title = ?, artist = ?, lyrics = ?, photo_path = ?, song_path = ?
            WHERE id = ?`;
        const params = [song.title, song.artist, song.lyrics, song.photo_path, song.song_path, id];
        
        db.query(query, params, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result);
        });
    },
    deleteSong: (id, callback) => {
        db.query('DELETE FROM songs WHERE id = ?', [id], callback);
    },
    incrementPlayCount: (id, callback) => {
        db.query('UPDATE songs SET play_count = play_count + 1 WHERE id = ?', [id], callback);
    }
};

module.exports = MusicModel;
