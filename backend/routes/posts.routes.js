const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

function escape(html) {
  return html
    .replace(/&/g, '')
    .replace(/</g, '')
    .replace(/>/g, '')
    .replace(/"/g, '')
    .replace(/'/g, '');
}

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts/add', async (req, res) => {
  try {
    const { title, text, updated, author, photo, price, phone, location } = req.body;
    const created = new Date().toISOString().slice(0, 19);

    const emailPattern = new RegExp(
      '^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}'
    );
    const validatedEmail = emailPattern.test(author);

    if (!validatedEmail) throw new Error('Wrong email!');
    if (text.length < 20 || title.length < 10)
      throw new Error('The text is too short');

    if (title && text && author) {
      const newPost = new Post({
        title: escape(title),
        text: escape(text),
        created: created,
        updated: updated,
        author: author,
        status: 'published',
        photo: photo,
        price: price,
        phone: phone,
        location: escape(location),
      });
      await newPost.save();
      res.json(await Post.find());
    }
    else res.json({ message: 'Please provide all details...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
