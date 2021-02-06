import 'dotenv/config';
import cors from 'cors';
import express from 'express';
var path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs')
import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'views')));
app.engine('html', ejs.renderFile);
// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

app.get('/', function (req, res) {
  res.render('login');
});

app.get('/register', function (req, res) {
  res.render('register');
});

app.post('/login', function (req, res) {
  console.log("---------------" + req.body['uname'] + "--------------");
  res.send({"success":true, "uname":req.body['uname']}).status(200);
});


// * Routes * //

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// * Start * //

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

// * Database Seeding * //

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });

  const user2 = new models.User({
    username: 'ddavids',
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};
