const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
/*https://stackoverflow.com/questions/26196467/sending-email-via-node-js-using-nodemailer-is-not-working*/

const app = express();
const PORT = process.env.PORT || 4002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log('jawaaak fez fez 4001');
});


app.get('/', (req, res) => {
  res.send('Welcome to my api');
})



app.post('/send', (req, res) => {
  var data = req.body;



  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'chafroudtarek6@gmail.com',
      clientId: '76444245392-6u26rp1lq2qmdq5g82944il582gkbsgh.apps.googleusercontent.com',
      clientSecret: 'YUm4qksmdYBvX2QnblVPh190',
      refreshToken: '1//09Ka6pDAEvMZMCgYIARAAGAkSNwF-L9IrpQTipmWdPYFa6N6wT92Gm4Habl0kMBXqLD3iIge5tdMsthJf3EVtZ4DNTD3MUM2G_es',
      accessToken: 'ya29.a0ARrdaM9rG7qrusVigzjkzcKqqfSbdhRMQT2Q0XizFE3XEHgsJ0Z4mUnMlftXbh1c593UNXg0sEUj4cDWhHXMReTf-OgZb7XVcVI5jT-vyQkHOv31l5yvZqIe2jTocck07Iw0y5TWTvdVf0F8mek_DcrZa1Vd',
      expires: 1625804168795
    }


  });


  var mailOptions = {
    from: data.email,
    to: 'chafroudtarek3@gmail.com',
    subject: data.subject,
    html: `<p>${data.name}</p>
           <p>${data.email}</p>
            <p>${data.message}</p>`
  };



  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(400).send('Error to my api');
    }

    else {
      console.log(info);
      return res.status(200).send('Valider');
    }

  });

});
