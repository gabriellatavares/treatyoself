const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const charge = async (req, res) => {
    try {
        let { status } = await stripe.charges.create({
            amount: req.body.amount * 100,
            currency: "eur",
            description: "An example charge",
            source: req.body.token_id
        });
        res.json({ status });
    } catch(error) {
        res
        .status(500)
        .json({ status: 'error' })
        .end();
    }
};
module.exports = { charge };
