const db = require('../../models');
const KamusSynon = db.kamussynos;
const { Sequelize } = require('sequelize');

exports.create = async (req, res) => {
    if (!req.body.namaAwal || !req.body.namaSama) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekKamusSynonim = {
        namaAwal: req.body.namaAwal,
        namaSama: req.body.namaSama,
    };
    try {
        const createKamusSynonim = await KamusSynon.create(CekKamusSynonim);
        res.json({
            status: 201,
            message: "Sukses, Data Kamus Synonim berhasil ditambahkan",
            data: createKamusSynonim
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const GetDataKamusSynonim = await KamusSynon.findAll();
        res.json({
            status: 200,
            message: "Suksess, Semua data Kamus Synonim berhasil ditemukan",
            data: GetDataKamusSynonim
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
exports.getById = async (req, res) => {
    const id = req.params.id;
    const nomor = await KamusSynon.count({ where: { id: id } });

    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.json({
            status: 404,
            message: "Data tidak ditemukan",
            data: null
        });
        return;
    }

    try {
        const GetDataKamusSynonim = await KamusSynon.findOne({ where: { id: id } });
        res.json({
            status: 200,
            message: "Sukses, Data Kamus Synonim berhasil ditemukan",
            data: GetDataKamusSynonim
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const nomor = await KamusSynon.count({ where: { id: id } });

    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.status(404).json({
            status: 404,
            message: "Data tidak ditemukan",
            data: null
        });
        return;
    }

    if (!req.body.namaAwal || !req.body.namaSama) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    const CekKamusSynonim = {
        namaAwal: req.body.namaAwal,
        namaSama: req.body.namaSama,
    };
    try {
        const UpdateKamusSynonim = await KamusSynon.update(CekKamusSynonim, { where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data Kamus Synonim dengan ID ${id} berhasil diubah`,
            data: UpdateKamusSynonim
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
    const nomor = await KamusSynon.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.status(404).json({
            status: 404,
            message: "id tidak ditemukan",
            data: null
        });
        return;
    }

    try {
        const deleteKamusSynonim = await KamusSynon.destroy({ where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data Kamus Synonim dengan ID ${id} berhasil dihapus`,
            data: deleteKamusSynonim
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}
