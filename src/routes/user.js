import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

router.post('/login', async (req, res) => {
  const user = await req.context.models.User.findByLogin(
    req.body.uname,
    req.body.psw
  );
  return res.send(user);
});

router.post('/signup', async (req, res) => {
  const user = await req.context.models.User.create({
    username: req.body.uname,
    password: req.body.psw
  });
  return res.render("signupSuccess");
});

export default router;
