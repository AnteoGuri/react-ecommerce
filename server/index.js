const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "ecommerce",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expire: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "users",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("success");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const type = req.body.type;
  const User = type == "seller" ? 1 : 0;
  console.log(User);
  console.log(type);
  console.log(username);
  console.log(name);
  console.log(password);

  db.query(
    "INSERT INTO user (username,name,type,password) VALUES (?,?,?,?)",
    [username, name, User, password],
    (err, result) => {
      console.log(err);
    }
  );
});
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);
  db.query(
    "SELECT * FROM user WHERE username = ? and password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "Wrong credentials." });
      }
    }
  );
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(400).send("Unable to log out");
    } else {
      res.send("Logout successful");
    }
  });
});

app.post("/deleteitem", (req, res) => {
  const id = req.body.id;
  db.query("DELETE FROM products where product_id=?", [id], (err, result) => {
    console.log(err);
  });
});

app.post("/addproduct", (req, res) => {
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  var fakepath = req.body.image;
  const fullDate = year + "-" + month + "-" + date;

  const id = req.body.id;
  const description = req.body.description;
  const name = req.body.name;
  const price = req.body.price;
  const img = fakepath.split("fakepath\\");
  const stock = req.body.stock;
  const image = img[1];

  console.log(fullDate);
  console.log(id);
  console.log(price);
  console.log(image);
  console.log(description);
  console.log(name);
  console.log(stock);

  db.query(
    "INSERT INTO products (product_seller,product_name,product_description,date,price,image,stock) VALUES (?,?,?,?,?,?,?)",
    [id, name, description, fullDate, price, image, stock],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/editproduct", (req, res) => {
  const id = req.body.id;
  const description = req.body.description;
  const name = req.body.name;
  const price = req.body.price;
  const stock = req.body.stock;
  const image = req.body.image;

  console.log(id);
  console.log(price);
  console.log(image);
  console.log(description);
  console.log(name);
  console.log(stock);

  if (image) {
    const img = image.split("fakepath\\");
    const realPath = img[1];

    db.query(
      "UPDATE products SET product_name=?,product_description=?,price=?,image=?,stock=? where product_id=?",
      [name, description, price, realPath, stock, id],
      (err, result) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      "UPDATE products SET product_name=?,product_description=?,price=?,stock=? where product_id=?",
      [name, description, price, stock, id],
      (err, result) => {
        console.log(err);
      }
    );
  }
});

// app.post("/getcartcount",(req,res)=>{
//     const id = req.body.id;
//     db.query("SELECT Count(id_buyer) as count FROM cart where id_buyer=?; ",
//     [id], (err,result)=>{
//        console.log(result);
//         if(err){
//             res.send({err: err})};

//                     res.send(result)
//     })
// });

//  app.get("/addproduct", (req,res)=>{
//      if(req.session){
//          res.send({loggedIn:true,user:req.session.user})
//      }else{
//          res.send({loggedIn:false})
//      }
//  })

app.post("/showsellerproducts", (req, res) => {
  const id = req.body.id;
  db.query(
    "SELECT * FROM products WHERE product_seller = ? ",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/showproducts", (req, res) => {
  const id = req.body.id;
  db.query("SELECT * FROM products", [id], (err, result) => {
    console.log(result);
    if (err) {
      res.send({ err: err });
    }

    res.send(result);
  });
});

app.post("/addtocart", (req, res) => {
  const buyerId = req.body.buyerid;
  const productId = req.body.productid;
  console.log(buyerId);
  console.log(productId);

  db.query(
    "INSERT INTO cart (id_buyer,id_product) VALUES (?,?)",
    [buyerId, productId],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/showcart", (req, res) => {
  const id = req.body.id;
  db.query(
    "select * from products inner join cart on products.product_id=cart.id_product where cart.id_buyer=?;",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/deletecart", (req, res) => {
  const id = req.body.id;
  const userid = req.body.userid;
  db.query(
    "delete from cart where id_product=? and id_buyer=?",
    [id, userid],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/checkout", (req, res) => {
  const prod_id = req.body.prod_id;
  const user_id = req.body.user_id;
  const seller_id = req.body.seller_id;
  const address = req.body.address;
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  const fullDate = year + "-" + month + "-" + date;
  const status = "ordered";

  console.log(prod_id);
  console.log(user_id);
  console.log(seller_id);
  console.log(address);

  db.query(
    "delete from cart where id_product=? and id_buyer=?",
    [prod_id, user_id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }
    }
  );

  db.query(
    "INSERT INTO purchase (product_id,user_id,seller_id,status,time_ordered,address) VALUES(?,?,?,?,?,?)",
    [prod_id, user_id, seller_id, status, fullDate, address],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );

  db.query(
    "UPDATE products set stock=stock-1 where product_id=?; ",
    [prod_id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }
    }
  );
});

app.post("/getorders", (req, res) => {
  const id = req.body.id;

  db.query(
    "select * from products, purchase join user on user.user_id=purchase.user_id  where products.product_seller=? and purchase.seller_id=? and purchase.product_id=products.product_id order by time_ordered desc;",
    [id, id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/dashorders", (req, res) => {
  const id = req.body.id;

  db.query(
    "select * from products, purchase join user on user.user_id=purchase.user_id  where products.product_seller=? and purchase.seller_id=? and purchase.product_id=products.product_id order by time_ordered desc LIMIT 5 ;",
    [id, id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/senditem", (req, res) => {
  const id = req.body.id;
  const status = "sent";
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  const fullDate = year + "-" + month + "-" + date;

  db.query(
    "update purchase set status=?, time_sent=? where purchase_id=?",
    [status, fullDate, id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});
app.post("/getsentitems", (req, res) => {
  const id = req.body.id;

  db.query(
    "select * from products, purchase join user on user.user_id=purchase.user_id  where user.user_id=? and purchase.product_id=products.product_id ORDER BY FIELD(status, 'sent', 'ordered', 'recieved');",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/getproductpage", (req, res) => {
  const id = req.body.id;
  db.query(
    "SELECT * from products where product_id=?;",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/rating", (req, res) => {
  const id = req.body.id;
  const rating = req.body.rating;
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  const fullDate = year + "-" + month + "-" + date;

  db.query(
    "update purchase set rating=?,status='recieved',time_recieved=?  where purchase_id=?",
    [rating, fullDate, id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/getdashitems", (req, res) => {
  const id = req.body.id;
  db.query(
    "SELECT * FROM products where product_seller=? order by product_id desc LIMIT 4",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/getunique", (req, res) => {
  const id = req.body.id;
  db.query(
    "SELECT COUNT(DISTINCT(user_id)) as count FROM purchase where seller_id=?;",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/getactive", (req, res) => {
  const id = req.body.id;
  console.log("id:" + id);
  db.query(
    "SELECT COUNT(purchase_id) as active FROM purchase where seller_id=? and status='ordered' or status='sent';",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/getfinished", (req, res) => {
  const id = req.body.id;
  console.log("id:" + id);
  db.query(
    "SELECT COUNT(purchase_id) as finished FROM purchase where seller_id=? and status='recieved' ;",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/getrevenue", (req, res) => {
  const id = req.body.id;
  console.log("id:" + id);
  db.query(
    "SELECT SUM(price) as revenue from products inner join purchase on products.product_id=purchase.product_id where purchase.seller_id=?;",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/avgrating", (req, res) => {
  const id = req.body.id;
  console.log("id:" + id);
  db.query(
    "SELECT CAST(AVG(RATING) AS DECIMAL(10,2)) as rating from purchase where product_id=?;",
    [id],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/bestsellers", (req, res) => {
  db.query(
    "SELECT  COUNT( purchase.product_id) AS `value_occurrence`,products.*  FROM purchase inner join products on purchase.product_id=products.product_id GROUP BY  purchase.product_id ORDER BY  `value_occurrence` DESC LIMIT 5;",
    [],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.post("/newestitems", (req, res) => {
  db.query(
    "SELECT * FROM products order by date desc limit 5;",
    [],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      }

      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("running");
});
