const db = require('../../models');
const FaktorSynon = db.fsynonims;

exports.create = async (req, res) => {
    if (!req.body.factorTime || !req.body.factorPlace || !req.body.factorFormal || !req.body.factorSocial || !req.body.factorActivity || !req.body.factorNuansa) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekFaktorSynonim = {
        factorTime : req.body.factorTime,
        factorPLace : req.body.factorPlace,
        factorFormal : req.body.factorFormal,
        factorSocial : req.body.factorSocial,
        factorActivity : req.body.factorActivity,
        factorNuansa : req.body.factorNuansa,
    };

    try {
        const Createfs = await FaktorSynon.create(CekFaktorSynonim);
        res.status(201).json({
            status: 201, 
            message: "Sukses, Data faktor synonim berhasil ditambahkan", 
            data: Createfs 
        });
    }catch (error) {
        res.json({ 
            status: 500,
            message: error.message || "Server Error", 
            data: null 
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const GetDatafs = await FaktorSynon.findAll();
        res.json({
            status: 200,
            message: "Suksess, Semua data Faktor Synonim berhasil ditemukan",
            data: GetDatafs
        });

    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

// //optional, mau dipake atau engga
// exports.getById = async (req, res) => {
//     const id = req.params.id;
//     const nomor = await FaktorSynon.count({ where: { id: id } });
//     if (NaN(id)) {
//         res.json({
//             status: 400,
//             message: "Id tidak boleh kosong dan harus angka",
//             data: null
//         });
//         return;
//     } else if (nomor == 0) {
//         res.json({
//             status: 200,
//             message: "Data Faktor Synonim tidak ditemukan",
//             data: null
//         });
//         return;
//     }
//     try {
//         const GetDatafs = await FaktorSynon.findOne({
//             where: {
//                 id: id
//             }
//         });
//         res.json({
//             message: "Suksess, Data Faktor Synonim berhasil ditemukan",
//             data: GetDatafs
//         });
//     } catch (error) {
//         res.json({
//             status: 500,
//             message: error.message || "Server Error",
//             data: null
//         });
//     }
// }

exports.update = async (req, res) => {
    const id = req.params.id;
    const nomor = await FaktorSynon.count({ where: { id: id } });
    if (NaN(id)) {
        res.json({
            status: 200,
            message: "Id tidak boleh kosong dan harus angka",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.status(404).json({
            status: 404,
            message: "Data Faktor Synonim tidak ditemukan",
            data: null
        });
        return;
    } else if (!req.body.factorTime || !req.body.factorPlace || !req.body.factorFormal || !req.body.factorSocial || !req.body.factorActivity || !req.body.factorNuansa) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    try {
        const Updatefs = await FaktorSynon.update({
            factorTime: req.body.factorTime,
            factorPlace: req.body.factorPlace,
            factorFormal: req.body.factorFormal,
            factorSocial: req.body.factorSocial,
            factorActivity: req.body.factorActivity,
            factorNuansa: req.body.factorNuansa
        }, {
            where: {
                id: id
            }
        });
        res.json({
            message: `Suksess, Data Faktor Synonim dengan ID ${id} berhasil diupdate`,
            data: Updatefs
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const nomor = await FaktorSynon.count({ where: { id: id } });
    if (NaN(id)) {
        res.json({
            status: 200,
            message: "Id tidak boleh kosong dan harus angka",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.status(404).json({
            status: 404,
            message: "Data Faktor Synonim tidak ditemukan",
            data: null
        });
        return;
    }
    try {
        const Deletefs = await FaktorSynon.destroy({
            where: {
                id: id
            }
        });
        res.json({
            message: `Suksess, Data Faktor Synonim dengan ID ${id} berhasil dihapus`,
            data: Deletefs
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}