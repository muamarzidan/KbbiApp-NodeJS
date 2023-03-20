const db = require('../../models');
const KamusAntonim = db.kamusantos;

exports.create = async (req, res) => {
    if (!req.body.namaAwal || !req.body.namaLawan) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba isi ulang data dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekKamusAntonim = {
        namaAwal: req.body.namaAwal,
        namaLawan: req.body.namaLawan,
    }
    try {
        const createKamusAntonim = await KamusAntonim.create(CekKamusAntonim);
        res.status(201).json({
            status: 201,
            message: "Sukses, Data Kamus Antonim berhasil ditambahkan",
            data: createKamusAntonim
        });
    }
    catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const GetDataKamusAntonim = await KamusAntonim.findAll();
        if (GetDataKamusAntonim.length == 0) {
            res.json({
                status: 200,
                message: "Data Kamus Antonim ditemukan, tapi masih kosong",
                data: null
            });
            return;
        } else  {
            res.json({
                status: 200,
                message: "Sukses, Semua data Kamus Antonim berhasil ditemukan",
                data: GetDataKamusAntonim
            });
        }
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
//     const nomor = await KamusAntonim.count({ where: { id: id } });
//     if (isNaN(id)) {
//         res.json({
//             status: 200,
//             message: "Id harus berupa angka",
//             data: null
//         });
//         return;
//     } else if (nomor == 0) {
//         res.status(404).json({
//             status: 404,
//             message: "Id tidak ditemukan",
//             data: null
//         });
//         return;
//     }
//     try {
//         const GetDataKamusAntonim = await KamusAntonim.findByPk(id);
//         res.json({
//             status: 200,
//             message: "Suksess, Data Kamus Antonim berhasil ditemukan",
//             data: GetDataKamusAntonim
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
    const nomor = await KamusAntonim.count({ where: { id: id } });

    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    }
    else if (nomor == 0) {
        res.status(404).json({
            status: 404,
            message: "Id tidak ditemukan",
            data: null
        });
        return;
    } else if (!req.body.namaAwal || !req.body.namaLawan) {
        res.json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    
    const CekKamusAntonim = {
        namaAwal: req.body.namaAwal,
        namaLawan: req.body.namaLawan,
    };
    try {
        const updateKamusAntonim = await KamusAntonim.update(CekKamusAntonim, {
            where: { id: id }
        });
        res.json({
            status: 200,
            message: `Sukses, Data Kamus Antonim dengan ID ${id} berhasil diubah`,
            data: updateKamusAntonim.data
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
    const nomor = await KamusAntonim.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    }
    else if (nomor == 0) {
        res.json({
            status: 404,
            message: "Id tidak ditemukan",
            data: null
        });
        return;
    }
    try {
        const deleteKamusAntonim = await KamusAntonim.destroy({
            where: { id: id }
        });
        res.json({
            status: 200,
            message: `Sukses, Data Kamus Antonim dengan ID ${id} berhasil dihapus`,
            data: deleteKamusAntonim
        });
    }catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}