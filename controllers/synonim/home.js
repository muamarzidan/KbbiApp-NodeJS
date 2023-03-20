const db = require('../../models');
const HomeSynonim = db.hsynonims;

exports.create = async (req, res) => {
    if (!req.body.para1 || !req.body.para2 || !req.body.para3) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba isi ulang dan tidak boleh kosong!",
            data: null
        });
        return; 
    }
    const CekHomeSynonim = {
        para1: req.body.para1,
        para2: req.body.para2,
        para3: req.body.para3,
    };
    try {
        const CreateHa = await HomeSynonim.create(CekHomeSynonim);
        res.status(201).json({
            status: 201,
            message: "Sukses, Data home synonim berhasil ditambahkan",
            data: CreateHa
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
        const GetHa = await HomeSynonim.findAll()
        if (GetHa.length == 0) {
            res.json({
                status: 200,
                message: "Data home ditemukan, tapi masih kosong",
                data: null
            });
            return;
        } else {
            res.json({
                status: 200,
                message: "Sukses, Semua data home synonim berhasil ditemukan",
                data: GetHa
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
//     const id  = req.params.id;
//     const nomor = await HomeSynonim.count({ where: { id: id } });
//     if (NaN(id)) {
//         res.json({
//             status: 200,
//             message: "Id harus berupa angka",
//             data: null
//         });
//         return;
//     } else if (nomor == 0) {
//         res.status(404).json({
//             status: 400,
//             message: "Id tidak ditemukan",
//             data: null
//         });
//         return;
//     }
//     try {
//         const GetHa = await HomeSynonim.findOne({ where: { id: id } });
//         res.json({
//             status: 200,
//             message: "Sukses, Data home synonim berhasil ditemukan",
//             data: GetHa
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
    const nomor = await HomeSynonim.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "id harus berupa angka",
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
    } else if (!req.body.para1 || !req.body.para2 || !req.body.para3) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba isi ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekHomeSynonim = {
        para1: req.body.para1,
        para2: req.body.para2,
        para3: req.body.para3,
    };
    try {
        const UpdateHa = await HomeSynonim.update(CekHomeSynonim, { where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data home synonim dengan ID ${id} berhasil diubah`,
            data: UpdateHa
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
    const nomor = await HomeSynonim.count({ where: { id: id } });
    if (isNaN(id)) {
        res.json({
            status: 200,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.status(404).json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    try {
        const DeleteHa = await HomeSynonim.destroy({ where: { id: id } });
        res.json({
            status: 200,
            message: `Sukses, Data home synonim dengan ID ${id} berhasil dihapus`,
            data: DeleteHa
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}
