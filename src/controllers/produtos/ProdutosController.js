import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.TOKEN}`}
    async function request(){
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
    axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.TOKEN}`}
    async function request(){
        try {
            const { data } = await axios.post(`${process.env.URL}/produtos`, req.body);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(400).send(null);
        };
    }
    request();
});

router.put('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.TOKEN}`}
    async function request(){
        try {
            const idProduto = req.headers.idproduto;
            const { data } = await axios.put(`${process.env.URL}/produtos/${idProduto}`, req.body);
            return res.status(201).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

router.delete('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.TOKEN}`}
    async function request(){
        try {
            const idProduto = req.headers.idproduto;
            const { data } = await axios.delete(`${process.env.URL}/produtos/${idProduto}`);
            return res.status(200).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

router.patch('/produtos/situacao', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${process.env.TOKEN}`}
    async function request(){
        try {
            const idProduto = req.headers.idproduto;
            const { data } = await axios.patch(`${process.env.URL}/produtos/${idProduto}/situacoes`, req.body);
            return res.status(200).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

export default router;