import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 8080;
const token = 'b0c235cdc769babec49a542204aa22f2e7ebfe25';
const url = 'https://developer.bling.com.br/api/bling';

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.use(express.json());

app.get('/produtos', (req, res) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    async function request(){
        try {
            const { data } = await axios.get(`${url}/produtos?pagina=1&limite=100`);
            return res.status(200).send(data);            
        } catch (error) {
            return res.status(400).send(null);
        }
    }
    request();
});

app.post('/produtos', (req, res) => {
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

app.put('/produtos', (req, res) => {
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

app.delete('/produtos', (req, res) => {
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

app.patch('/produtos/situacao', (req, res) => {
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