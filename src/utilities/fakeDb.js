// use local storage to manage cart data
const addToDb = id => {
    let jobsCart = getJobsCart();
    // add quantity
    const quantity = jobsCart[id];
    if (!quantity) {
        jobsCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobsCart[id] = newQuantity;
    }
    localStorage.setItem('jobs-cart', JSON.stringify(jobsCart));
}
const getJobsCart = () => {
    let jobsCart = {};

    //get the job cart from local storage
    const storedCart = localStorage.getItem('jobs-cart');
    if (storedCart) {
        jobsCart = JSON.parse(storedCart);
    }
    return jobsCart;
}
export {
    addToDb,
    getJobsCart 
}
