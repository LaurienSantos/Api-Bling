import axios from 'axios';
import express from 'express';

const token = 'b6da78c52b1d1a0faac6edeaeb2efa2f2b2c07e7';
const url = process.env.URL;
const router = express.Router();

router.get('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    async function request(){
        console.log(token);
        try {
            const { data } = await axios.get(`${process.env.URL}/produtos?pagina=1&limite=100`);
            return res.status(200).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

router.post('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    async function request(){
        try {
            const { data } = await axios.post(`${url}/produtos`, req.body);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).send(null);
        };
    }
    request();
});

router.put('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    async function request(){
        try {
            const idProduto = req.headers.idproduto;
            const { data } = await axios.put(`${url}/produtos/${idProduto}`, req.body);
            return res.status(201).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

router.delete('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    async function request(){
        try {
            const idProduto = req.headers.idproduto;
            const { data } = await axios.delete(`${url}/produtos/${idProduto}`);
            return res.status(200).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

router.patch('/produtos/situacao', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    async function request(){
        try {
            const idProduto = req.headers.idproduto;
            const { data } = await axios.patch(`${url}/produtos/${idProduto}/situacoes`, req.body);
            return res.status(200).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

export default router;