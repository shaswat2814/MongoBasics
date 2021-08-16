const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("OPEN CONNECTION!");
    })
    .catch(err => {
        console.log("ERROR FOUND!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size:{
        type:String,
        enum:['S','X','L']
    }
});

productSchema.methods.greet = function() {
    console.log("HEllo!there");
};

const findProduct  = async  () => {
    const foundProduct = await Product.findOne({name:"Bike Helmet"});
    foundProduct.greet();
}

findProduct();

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Mountain Bike', price: "Hello" });//the validation wwe check if it can change the value to desired format specified int he schema
// const bike = new Product({name:"Bike Helmet" ,price:"9.9",categories:['cycling','Biking']});//will be added to the database as the string will be parsed to a number easily

// const bike = new Product({name:"Tire Pump",price:19.9,categories:["cycling"]});
// bike.save()
//     .then(data => {
//         console.log("IT WORKED");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("ERROr!");
//         console.log(err);
//     })

//updating a document against a validation 
// Product.findOneAndUpdate({ name: "Tire Pump" }, { price: -100.1 }, { new: true ,runValidators:true})
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const bike = new Product({name:"Tire Pump",price:19.9,categories:["cycling"],size:'L'});

bike.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

