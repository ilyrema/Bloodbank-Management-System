import { HTTP } from '../config/Http.js';
/**
 **
 **/
const UserController = {

    /**
     ** Display a listing of all posts.
     **/
    index: async (req, res) => {
        await res.send(`Users - Index`);
    },
    /**
     ** Show the form for creating a new post.
     **/
    create: async (req, res) => {
        await res.send(`Users - Create`);
    },

    /**
     ** Store a newly created post in the database.
     **/
    store: async (req, res) => {
        await res.send(`Users - Store`);
    },

    /**
     ** Display the details of a specific post.
     **/
    show: async (req, res) => {
        const id = req.params.id;
        await res.send(`Users - Show | ${id}`);
    },

    /**
     ** Show the form for editing an existing post.
     **/
    edit: async (req, res) => {
        const id = req.params.id;
        await res.send(`Users - Edit | ${id}`);
    },

    /**
     ** Update an existing post in the database.
     **/
    update: async (req, res) => {
        const id = req.params.id;
        await res.send(`Users - Update | ${id}`);
    },

    /**
     ** Delete a post from the database.
     **/
    destroy: async (req, res) => {
        const id = req.params.id;
        await res.send(`Users - Destroy | ${id}`);
    },
};


export default UserController;