const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPayment = async (req, res) => {
    try {
        const { name, price } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",

            line_items: [{
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: name,
                    },
                    unit_amount: price * 100, 
                },
                quantity: 1,
            }],

            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ url: session.url });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        })
    }
}

module.exports = { createPayment }