import sendgrid from "@sendgrid/mail";
import data from "../../data/products.json";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    const shoppingCart = req.body.shoppingCart
      .map(({ id, variant }, index) => {
        const product = data.find((product) => id === product.id);
        const currentVariant = product.variants[variant];
        return `
      <li>${product.name}: ${currentVariant.duration} Tage ${currentVariant.price} € </li>
       `;
      })
      .join("");

    const totalPrice = req.body.shoppingCart.reduce(
      (sumPrice, { id, variant }) => {
        const product = data.find((product) => id === product.id);
        return sumPrice + product.variants[variant].price;
      },
      0
    );

    await sendgrid.send({
      to: [`${req.body.email}`, "monika.moj74@googlemail.com"],
      from: {
        name: `${req.body.fullname}`,
        email: "monika.moj74@googlemail.com",
      },
      subject: `[Lead from website] :${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <ul>${shoppingCart}</ul>
               <p>Gesamt: ${totalPrice} €</p>
              <br>
              </div>
              </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ error: "Etwas ist schief gelaufen. Bitte versuche es noch mal" });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
