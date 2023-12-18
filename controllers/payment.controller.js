const Razorpay_Status = require("../models/Payment");
const Razorpay = require("razorpay");
const  crypto  = require("crypto") ;

const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

const checkout = async (req, res) => {
  // console.log(req.body)
  const options = {
    amount: Number(req.body.total_amount * 100),
    currency: "INR",
    receipt: "razorpay@gmail.com",
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    // console.log(order);
    res.status(200).send({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("orderId for payment is not created");
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  try {
    const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_ID_KEY)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Razorpay_Status.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
  } catch (error) {
    res.status(500).send("payment verification is  successfull");
  }
};

module.exports = {
  checkout,
  paymentVerification,
};
