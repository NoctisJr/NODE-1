import express from "express";

//obtener url de views en forma dinamica
import { dirname, join } from "path"; 
import { fileURLToPath } from "url";

//importamos routes
import router from "./routes/index.js";

const app = express();

//obtener url de views en forma dinamica
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));


app.set('view engine', 'ejs');

//Rutas del html - Se traspasan a routes para orden del codigo
//app.get('/', (req, res) => res.render('index', {title: 'first website with Node'}))
//app.get('/about', (req, res) => res.render('about'))
//app.get('/contact', (req, res) => res.render('contact'))

app.use(router);

app.use(express.static(join(__dirname, 'public')))

//seleccion de puerto
app.listen(3000);
console.log("server is listening on port", 3000);
