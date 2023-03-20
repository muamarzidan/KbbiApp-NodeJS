const db = require('../../models');
const JenisSynon = db.jsynonims;

exports.create = async (req, res) => {
    if (!req.body.synonimMutlak || !req.body.synonimSemirip || !req.body.synonimSelingkung) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekJenisSynonim = {
        synonimMutlak: req.body.synonimMutlak,
        synonimSemirip: req.body.synonimSemirip,
        synonimSelingkung: req.body.synonimSelingkung,
    };

    try {
        const Createjs = await JenisSynon.create(CekJenisSynonim);
        res.status(201).json({ 
            status: 201,
            message: "Sukses, Data jenis synonim berhasil ditambahkan", 
            data: Createjs 
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
        const GetDatajs = await JenisSynon.findAll();
        res.json({ 
            status: 200,
            message: "Suksess, Semua data Jenis Synonim berhasil ditemukan", 
            data: GetDatajs 
        });
    } catch (error) {
        res.json({ 
            status: 500,
            message: error.message || "Server Error", 
            data: null 
        });
    }
}
//optional, mau dipake atau engga
// exports.getById = async (req, res) => {
//     const id = req.params.id;
//     const nomor = await JenisSynon.count({ where: { id: id } });
//     if (isNaN(id)) {
//         res.json({ 
//             status: 400, 
//             message: "Id harus berupa angka", 
//             data: null 
//         });
//         return;
//     } else if (nomor == 0) {
//         res.json({ 
//             status: 404, 
//             message: `Data dengan id ${id} tidak ditemukan`, 
//             data: null 
//         });
//         return;
//     }
//     try {
//         const GetIdjs = await JenisSynon.findByPk(id, { rejectOnEmpty: true });
//         res.json({ 
//             message: `Suksess data dengan ${id} berhasil ditemukan`, 
//             data: GetIdjs });
//     }catch (error){
//         res.json({ 
//             status: 500, 
//             message: error.message || "Server Error", 
//             data: null 
//         });
//     }
// }


exports.update = async (req, res) => {
    const id = req.params.id;
    const nomor = await JenisSynon.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({ 
            status: 400, 
            message: "Id harus angka", 
            data: null 
        });
        return;
    } else if (nomor == 0) {
        res.json({ 
            status: 404, 
            message: `Data dengan id ${id} tidak ditemukan`, 
            data: null 
        });
        return;
    }

    if (!req.body.synonimMutlak || !req.body.synonimSemirip || !req.body.synonimSelingkung) {
        res.json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    const CekJenisSynonim = {
        synonimMutlak: req.body.synonimMutlak,
        synonimSemirip: req.body.synonimSemirip,
        synonimSelingkung: req.body.synonimSelingkung,
    };

    try {
        const updatejs = await JenisSynon.update(CekJenisSynonim, { where: { id: id } });
        res.json({ 
            status: 200,
            message: `Suksess, Data jenis synonim dengan id ${id} berhasil diupdate`, 
            data: updatejs 
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
    const nomor = await JenisSynon.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({ 
            status: 400, 
            message: "Id harus berupa angka", 
            data: null 
        });
        return;
    } else if (nomor == 0) {
        res.json({ 
            status: 404, 
            message: `Data dengan id ${id} tidak ditemukan`, data: null });
        return;
    }
    try {
        const deletejs = await JenisSynon.destroy({ where: { id: id } });
        res.json({ 
            status: 200,
            message: `Suksess, Data dengan id ${id} berhasil dihapus`, 
            data: deletejs 
        });
    } catch (error) {
        res.json({ 
            status: 500, 
            message: error.message || "Server Error", data: null });
    }
}