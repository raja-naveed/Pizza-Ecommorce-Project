const express = require("express");
const mongoose = require("mongoose");
const Products = require("./model/model");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');


app.use(cors());

// const Mong = "mongodb://localhost:27017/Product";
const Mong = "mongodb+srv://rajadahri11:T2fcIVNDI8K8FvhC@cluster0.9ekjofx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(Mong, {
  useNewUrlParser: true,
  // dbName: 'products',
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors(require('./middlewares/credentials')))
// app.use(cors())

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://pizza-ecommerce-app-using-mern-stack.vercel.app");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// added cors 
// const allowedOrigins = [
//   'https://pizza-ecommerce-app-using-mern-stack-98ic.vercel.app',
//   'https://another-allowed-origin.com'
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Hello from the API!');
});
// Create a new route to handle the provided data array
app.post("/addProvidedData", async (req, res) => {
  try {
    const providedProductsArray = [
      {
          "_id": "60c67bdff5ee510015f3dda8",
          "name": "Havana special",
          "price": 599,
          "size": "Small",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798224663-303286145.png?raw=true",
          "createdAt": "2021-06-13T21:42:55.573Z",
          "__v": 0
      },
      {
          "_id": "60c67bc0f5ee510015f3dda7",
          "name": "Chicken premier",
          "price": 899,
          "size": "Medium",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798368145-612682611.png?raw=true",
          "createdAt": "2021-06-13T21:42:24.070Z",
          "__v": 0
      },
      {
          "_id": "60c67ba9f5ee510015f3dda6",
          "name": "Double peperoni",
          "price": 1399,
          "size": "Small",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798224663-303286145.png?raw=true",
          "createdAt": "2021-06-13T21:42:01.515Z",
          "__v": 0
      },
      {
          "_id": "60c67b95f5ee510015f3dda5",
          "name": "Mushroom",
          "price": 499,
          "size": "Small",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1623615210523-833930790.png?raw=true",
          "createdAt": "2021-06-13T21:41:41.640Z",
          "__v": 0
      },
      {
          "_id": "60c67b7ef5ee510015f3dda4",
          "name": "Mix BBQ",
          "price": 1299,
          "size": "Large",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798169571-671551234.png?raw=true",
          "createdAt": "2021-06-13T21:41:18.956Z",
          "__v": 0
      },
      {
          "_id": "60c67b6af5ee510015f3dda3",
          "name": "Carbonara",
          "price": 999,
          "size": "Large",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798169571-671551234.png?raw=true",
          "createdAt": "2021-06-13T21:40:58.192Z",
          "__v": 0
      },
      {
          "_id": "60c67b5af5ee510015f3dda2",
          "name": "Margarita",
          "price": 599,
          "size": "Large",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true",
          "createdAt": "2021-06-13T21:40:42.881Z",
          "__v": 0
      },
      {
          "_id": "60c67b47f5ee510015f3dda1",
          "name": "Chicken mushroom",
          "price": 799,
          "size": "Small",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true",
          "createdAt": "2021-06-13T21:40:23.941Z",
          "__v": 0
      },
      {
          "_id": "60c67b32f5ee510015f3dda0",
          "name": "Four cheese",
          "price": 1200,
          "size": "Medium",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798169571-671551234.png?raw=true",
          "createdAt": "2021-06-13T21:40:02.211Z",
          "__v": 0
      },
      {
          "_id": "60c67acaf5ee510015f3dd9f",
          "name": "Caramel pineapple",
          "price": 790,
          "size": "Medium",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true",
          "createdAt": "2021-06-13T21:38:18.489Z",
          "__v": 0
      },
      {
          "_id": "64193f731b39402248bb3ef8",
          "name": "Chocolate Pizza",
          "price": 500,
          "size": "smiall",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798224663-303286145.png?raw=true",
          "createdAt": "2023-03-21T05:24:03.068Z",
          "__v": 0
      },
      {
          "_id": "64193fad1b39402248bb3efa",
          "name": "Blue Pizza",
          "price": 500,
          "size": "smiall",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798224663-303286145.png?raw=true",
          "createdAt": "2023-03-21T05:25:01.961Z",
          "__v": 0
      },
      {
          "_id": "6419de8e88bff9a5893d4853",
          "name": "Chocolaty Pizza",
          "price": 23,
          "size": "Large",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true",
          "createdAt": "2023-03-21T16:42:54.156Z",
          "__v": 0
      },
      {
          "_id": "641a9eb0815c29288169afee",
          "name": "Rafay Pizza",
          "price": 500,
          "size": "Small",
          "image": "https://github.com/codersgyan/pizza-images/blob/main/1619798003389-788648576.png?raw=true",
          "createdAt": "2023-03-22T06:22:40.445Z",
          "__v": 0
      }
  ];

    if (!Array.isArray(providedProductsArray)) {
      return res.status(400).send("Provided data should be an array of products.");
    }

    const insertedProducts = await Products.insertMany(providedProductsArray);

    res.status(201).json(insertedProducts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});



// Creating Data 
app.post("/createProduct", async (req, res) => {
  try {
    const { name, price, size, image } = req.body;
    const product = new Products({
      name,
      price,
      size,
      image
    }); 
    console.log(product);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});



// getting data 
app.get("/getData", async (req, res) => {
  const products = await Products.find({});
  res.status(200).json(products);
});

app.get("/getData/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const product = await Products.findById(id).maxTimeMS(30000);
    if (!product) {
      return res.status(404).send(`Product not found ${req.params.id}`);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.post("/getData/items", async (req, res) => {
  let documents;
        try {
            documents = await Products.find({
                _id: { $in: req.body._id },
            }).select('-updatedAt -__v');
        } catch (err) {
            res.send(err)
        }
        console.log("data " , documents);
        return res.json(documents);
});


app.listen(3002, () => {
  console.warn(`Port is running on 3002`);
});
