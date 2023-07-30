import express from 'express';
import CONTROLLER from '../config/Controller.js';


const api = express();

/* ---------------- USER API ---------------- */

// Route for displaying a listing of all posts
api.get('/users', async (req, res) => {
    await CONTROLLER.USER.index(req, res);
});

// Route for showing the form to create a new post
api.get('/users/create', async (req, res) => {
    await CONTROLLER.USER.create(req, res);
});

// Route for handling the form submission to create a new post
api.post('/users', async (req, res) => {
    await CONTROLLER.USER.store(req, res);
});

// Route for displaying the details of a specific post
api.get('/users/:id', async (req, res) => {
    await CONTROLLER.USER.show(req, res);
});

// Route for showing the form to edit an existing post
api.get('/users/:id/edit', async (req, res) => {
    await CONTROLLER.USER.edit(req, res);
});

// Route for handling the form submission to update an existing post
api.put('/users/:id', async (req, res) => {
    await CONTROLLER.USER.update(req, res);
});

// Route for handling the form submission to delete a post
api.delete('/users/:id', async (req, res) => {
    await CONTROLLER.USER.destroy(req, res);
});

export { api as ApiRouter }