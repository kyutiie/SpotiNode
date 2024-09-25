const MusicModel = require('../models/musicModel');

const MusicController = {
    index: (req, res) => {
        MusicModel.getAllSongs((err, songs) => {
            if (err) throw err;
            res.render('index', { songs });
        });
    },
    addSong: (req, res) => {
        if (req.method === 'POST') {
            const song = {
                title: req.body.title,
                artist: req.body.artist,
                lyrics: req.body.lyrics,
                photo_path: req.body.photo_path,
                song_path: req.body.song_path,
            };
            MusicModel.addSong(song, (err) => {
                if (err) throw err;
                res.redirect('/');
            });
        } else {
            res.render('addsong');
        }
    },
    editSong: (req, res) => {
        const id = req.params.id;
    
        if (req.method === 'POST') {
            const updateSong = {
                title: req.body.title,
                artist: req.body.artist,
                lyrics: req.body.lyrics,
                photo_path: req.body.photo_path,
                song_path: req.body.song_path
            };
    
            MusicModel.editSong(id, updateSong, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error updating song'); 
                }
                res.redirect('/'); 
            });
        } else {
            
            MusicModel.getSongById(id, (err, song) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error retrieving song'); 
                }
                res.render('editsong', { song });
            });
        }
    },
    deleteSong: (req, res) => {
        const id = req.params.id;
        MusicModel.deleteSong(id, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    },
    playSong: (req, res) => {
        const id = req.params.id;
        MusicModel.incrementPlayCount(id, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    },
    
};


module.exports = MusicController;
