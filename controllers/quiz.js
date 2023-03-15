const db = require('../models')
const quiz = require("../models/quiz")
//dengan database (otomatisnya) quizzes
const Quiz = db.quizzes

//METHOD
//create untuk menambahkan data ke tabel quiz
exports.create = async (req, res) => {
    //error handling (penanganan kesalahan)
    try {
        //const data inisiasi variabel data
        //await quiz.create = perintah untuk menyimpan data dari request body
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created successfully.",
            data: data
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

//menampilkan semua data sesuai model dari database
exports.getAll = async (req, res) => {
    try {
        //menampung semua data quiz yg didapatkan dengan perintah findAll
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully",
            data: quizzes,
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        })
    }
}

exports.findOne = async (req, res) => {
    //mengambil parameter yg dibaca di const id
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quizzes retrieved successfully with id=${id}`,
            data: quiz
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occurred while retrieving quiz',
            data: null
        })
    }
}

exports.update = async (req, res) => {
    //di url kita menambah parameter, yg mana parameter tersebut disimpan di const id
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        //quiz nya diupdate dari merequest body lalu disimpan berdasarkan id nya
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfully",
            data: quiz,
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        })
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.destroy()
        res.json({
            message: 'Quiz deleted successfully'
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || 'Some error occured while retrieving quiz',
            data: null,
        })
    }
}

//menampilkan data quiz berdasarkan id categpry tertentu
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with categoryId=${id}`,
        data: quizzes
    })
}

exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with levelId=${id}`,
        data: quizzes,
    })
}