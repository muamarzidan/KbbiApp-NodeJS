const router = require('express').Router()
//variabel untuk menampung/ mengambil data antonim dan kamus controller, lalu menginisiasi endpoin

const JenisAntonimController = require('../controllers/antonim/jenis');
const FaktorAntonimController = require('../controllers/antonim/sifat');
const KamusAntonimController = require('../controllers/antonim/kamus');
const HomeAntonimController = require('../controllers/antonim/home');

router.post('/jenis', JenisAntonimController.create)
router.get('//jenis', JenisAntonimController.getAll)
// router.get('/jenis/:id', JenisAntonimController.getById) optional
router.put('/jenis/:id', JenisAntonimController.update)
router.delete('/jenis/:id', JenisAntonimController.delete)

router.post('/faktor', FaktorAntonimController.create)
router.get('/faktor', FaktorAntonimController.getAll)
// router.get('/faktor/:id', FaktorAntonimController.getById) optional
router.put('/faktor/:id', FaktorAntonimController.update)
router.delete('/faktor/:id', FaktorAntonimController.delete)

router.post('/kamus', KamusAntonimController.create)
router.get('/kamus', KamusAntonimController.getAll)
// router.get('/kamus/:id', KamusAntonimController.getById) optional
router.put('/kamus/:id', KamusAntonimController.update)
router.delete('/kamus/:id', KamusAntonimController.delete)

router.post('/home', HomeAntonimController.create)
router.get('/home', HomeAntonimController.getAll)
// router.get('/home/:id', HomeAntonimController.getById) optional
router.put('/home/:id', HomeAntonimController.update)
router.delete('/home/:id', HomeAntonimController.delete)


module.exports = router