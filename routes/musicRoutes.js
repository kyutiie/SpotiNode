const express = require('express');
const router = express.Router();
const MusicController = require('../controllers/musicController');

router.get('/', MusicController.index);
router.get('/add', MusicController.addSong);
router.post('/add', MusicController.addSong);
router.get('/edit/:id', MusicController.editSong);
router.post('/edit/:id', MusicController.editSong);
router.get('/delete/:id', MusicController.deleteSong);
router.get('/play/:id', MusicController.playSong);

module.exports = router;
