export const emptyCheck = (req, res, next) => {
  const username = req.body.username;
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const email = req.body.email;
  const pass = req.body.password;
  if (!username || !fname || !lname || !email || !pass) {
    // add picture
    return res.send({ status: false, details: 'please fill out the form to register' });
  } else {
    next();
  }
};

export const username = (req, res, next) => {
  const username = req.body.username;
  if (username && username.length > 3 && username.length < 20 && username.match(/^[a-zA-Z0-9]\w+$/)) {
    next();
  } else {
    return res.send({ status: false, details: 'username not valid' });
  }
};

export const firstname = (req, res, next) => {
  const fname = req.body.firstname;
  if (fname && fname.length >= 3 && fname.length <= 40 && fname.match(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/)) {
    next();
  } else {
    return res.send({ status: false, details: 'firstname not valid' });
  }
};

export const lastname = (req, res, next) => {
  const lname = req.body.lastname;
  if (lname && lname.length >= 3 && lname.length <= 40 && lname.match(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/)) {
    next();
  } else {
    return res.send({ status: false, details: 'lastname not valid' });
  }
};

export const email = (req, res, next) => {
  const mail = req.body.email;
  if (mail && mail.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
    next();
  } else {
    return res.send({ status: false, details: 'email not valid' });
  }
};

export const passwordRegexp = (req, res, next) => {
  const password = req.body.password;
  const passRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.).*$', 'g');
  if (password.length < 8 || password.length > 20) {
    return res.send({ status: false, details: 'Password must be between 8 and 20 characters' });
  } else if (!passRegex.test(password)) {
    return res.send({ status: false, details: 'Password must contain one lowcase, one uppercase, and one number' });
  } else {
    next();
  }
};

export const loginPasswordRegexp = (req, res, next) => {
  const password = req.body.password;
  const passRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.).*$', 'g');
  if (password.length < 8 || password.length > 20) {
    return res.send({ status: false, details: 'Wrong password' });
  } else if (!passRegex.test(password)) {
    return res.send({ status: false, details: 'Wrong password' });
  } else {
    next();
  }
};

export const password = (req, res, next) => {
  const pass = req.body.password;
  const confirm = req.body.confirm;
  if (pass === confirm) {
    next();
  }
  else {
    return res.send({ status: false, details: 'Passwords don\'t match' });
  }
};