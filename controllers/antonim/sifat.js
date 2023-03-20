const db = require('../../models');
const SifatAntonim = db.santonims;

exports.create = async (req, res) => {
    if (!req.body.oposisiMajemuk || !req.body.opsisiKembar || !req.body.oposisiGradual || !req.body.oposisiInversi || !req.body.oposisiHirarkis || !req.body.oposisiRelasional) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekSifatAntonim = {
        oposisiMajemuk: req.body.oposisiMajemuk,
        opsisiKembar: req.body.opsisiKembar,
        oposisiGradual: req.body.oposisiGradual,
        oposisiInversi: req.body.oposisiInversi,
        oposisiHirarkis: req.body.oposisiHirarkis,
        oposisiRelasional: req.body.oposisiRelasional,
    };
    try {
        const Createsa = await SifatAntonim.create(CekSifatAntonim);
        res.status(201).json({
            status: 201,
            message: "Sukses, Data sifat antonim berhasil ditambahkan",
            data: Createsa
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
        const Getsa = await SifatAntonim.findAll();
        res.json({
            status: 200,
            message: "Suksess, Semua data sifat antonim berhasil ditemukan",
            data: Getsa
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

// //optional, mau dipake atau engga
// exports.getById = async (req, res) => {
//     const id = req.params.id;
//     const nomor = await SifatAntonim.count({ where: { id: id } });

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
//             message: "Data tidak ditemukan",
//             data: null
//         });
//         return;
//     } else {
//         try {
//             const Getsa = await SifatAntonim.findByPk(id);
//             res.json({
//                 message: "Sukses, Data sifat antonim berhasil ditemukan",
//                 data: Getsa
//             });
//         }
//         catch (error) {
//             res.json({
//                 status: 500,
//                 message: error.message || "Server Error",
//                 data: null
//             });
//         }
//     }
// }

exports.update = async (req, res) => {
    const id = req.params.id;
    const nomor = await SifatAntonim.count({ where: { id: id } });

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
            message: "Data tidak ditemukan",
            data: null
        });
        return;
    }

    if (!req.body.oposisiMajemuk || !req.body.opsisiKembar || !req.body.oposisiGradual || !req.body.oposisiInversi || !req.body.oposisiHirarkis || !req.body.oposisiRelasional) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    const CekSifatAntonim = {
        oposisiMajemuk: req.body.oposisiMajemuk,
        opsisiKembar: req.body.opsisiKembar,
        oposisiGradual: req.body.oposisiGradual,
        oposisiInversi: req.body.oposisiInversi,
        oposisiHirarkis: req.body.oposisiHirarkis,
        oposisiRelasional: req.body.oposisiRelasional,
    };

    try {
        const Updatesa = await SifatAntonim.update(CekSifatAntonim, { where: { id: id } });
        res.status(201).json({
            status: 201,
            message: `Sukses, Data sifat antonim berhasil dengan id ke ${id} diubah`,
            data: Updatesa
        });
    }
    catch (error) {
        res.json({
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const nomor = await SifatAntonim.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({
            status: 400,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    }
    else if (nomor == 0) {
        res.json({
            status: 404,
            message: "Data tidak ditemukan",
            data: null
        });
        return;
    }
    try {
        const Deletesa = await SifatAntonim.destroy({ where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data sifat antonim dengan ID ${id}berhasil dihapus1`,
            data: Deletesa
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}