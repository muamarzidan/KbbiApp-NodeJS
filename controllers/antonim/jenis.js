const db = require('../../models');
const JenisAntonim = db.jantonims;

exports.create = async (req, res) => {
    if (!req.body.antonimBiner || !req.body.antonimNonBiner) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba isi ulang dan tidak boleh ada kosong!",
            data: null
        });
        return;
    }
    const CekJenisAntonim = {
        antonimBiner: req.body.antonimBiner,
        antonimNonBiner: req.body.antonimNonBiner,
    };
    try {
        const CreateJa = await JenisAntonim.create(CekJenisAntonim);
        res.status(201).json({
            status: 201,
            message: "Sukses, Data jenis antonim berhasil ditambahkan",
            data: CreateJa
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
        const GetJa = await JenisAntonim.findAll();
        if (GetJa.length == 0) {
            res.json({
                status: 200,
                message: "Data jenis ditemukan, tapi masih kosong",
                data: null
            });
            return;
        } else if (GetJa.length > 0) {
            res.json({
                status: 200,
                message: "Sukses, Semua data jenis antonim berhasil ditemukan",
                data: GetJa
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


// //optional, mau dipake atau engga
// exports.getById = async (req, res) => {
//     const id = req.params.id;
//     const nomor = await JenisAntonim.count({ where: { id: id } });
//     if (isNaN(id)) {
//         res.json({
//             status: 400,
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
//         const GetIdJa = await JenisAntonim.findOne({ where: { id: id } });
//         res.json({
//             message: "Sukses, Data jenis antonim berhasil ditemukan",
//             data: GetIdJa
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
    const nomor = await JenisAntonim.count({ where: { id: id } });
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
            message: "Id tidak ditemukan",
            data: null
        });
        return;
    } else if (!req.body.antonimBiner || !req.body.antonimNonBiner) {
        res.json({
            status: 200,
            message: "Update gagal, Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekJenisAntonim = {
        antonimBiner: req.body.antonimBiner,
        antonimNonBiner: req.body.antonimNonBiner,
    };
    try {
        const UpdateJa = await JenisAntonim.update(CekJenisAntonim, { where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data jenis antonim dengan ID ${id} berhasil diupdate`,
            data: UpdateJa
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
    const nomor = await JenisAntonim.count({ where: { id: id } });
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
    }
    try {
        const DeleteJa = await JenisAntonim.destroy({ where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data jenis antonim dengan ID ${id} berhasil dihapus`,
            data: DeleteJa
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}