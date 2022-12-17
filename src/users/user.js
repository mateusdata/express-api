const { application } = require("express")

const data = [
    {email:"mateus@teste.com", id:0, tokin: Math.random().toString(16).substr(2)},
    {email:"carlos123@teste.com", id:1, tokin: Math.random().toString(16).substr(2)},
    {email:"matesds@teste.com", id:2, tokin: Math.random().toString(16).substr(2)},
    {email:"mariaeus@teste.com", id:3, tokin: Math.random().toString(16).substr(2)},
    {email:"felipa125@teste.com", id:4, tokin: Math.random().toString(16).substr(2)},
    {email:"msd@teste.com", id:5, tokin: Math.random().toString(16).substr(2)},
    {email:"maa1231@teste.com", id:6, tokin: Math.random().toString(16).substr(2)},
    {email:"mateus2020@teste.com", id:7, tokin: Math.random().toString(16).substr(2)},
    {email:"mateussales@teste.com", id:8, tokin: Math.random().toString(16).substr(2)},
]

exports.data = data