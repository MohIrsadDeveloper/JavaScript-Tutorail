/**** Object Destructuring *****/

const brand = {
    brandName : "paragon",
    famous : "sandal",
    year : 2022,
    newyear : 2023
}

// // old practice
// const brandName = brand.brandName;
// const famous = brand.famous;
// console.log(brandName, famous);

// new practice
// const {brandName, famous} = brand;
// console.log(brandName);
// console.log(famous );

const {brandName, famous, ...restprops} = brand;
console.log(restprops);