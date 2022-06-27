const userService = require('./user');
const Publication = require('../models/Publication');
const { Types } = require('mongoose');

async function getPublication(id) {
    const publication = await Publication.findById(id).lean();
    return publication;
}

async function getAllPublications() {
    const publications = await Publication.find({}).lean();
    return publications;
}

async function createPublication(body, authorId) {
    let { title, image, price, description, paymentMethod } = body;
    if (price.trim() === '') {
        price = -1;
    } else {
        price = Number(price);
    }

    const publication = new Publication({
        title,
        image,
        price,
        description,
        paymentMethod,
        author: authorId,
    });

    await publication.save();
    return publication;
}

async function editPublication(body, id) {
    let { title, image, price, description, paymentMethod } = body;
    if (price.trim() === '') {
        price = -1;
    } else {
        price = Number(price);
    }

    const publication = await Publication.findByIdAndUpdate(id, {
        title,
        image,
        price,
        description,
        paymentMethod,
    });

    await publication.save();
    return publication;
}

async function deletePublication(id) {
    const publication = await Publication.findByIdAndDelete(id);
    return publication;
}

async function buyCrypto(postId, authorId) {
    const objectId = Types.ObjectId(authorId);
    const updatedPublication = await Publication.findByIdAndUpdate(postId, {
        $push: {
            buyers: objectId,
        }
    }, { runValidators: false, });

    return updatedPublication;
}

async function searchPublications(title, paymentMethod) {
    const params = {};
    if (title.trim()) {
        params.title = RegExp(`^${title.trim()}$`, 'i');
    }

    if (paymentMethod.trim()) {
        params.paymentMethod = RegExp(`^${paymentMethod.trim()}$`, 'i');
    }

    const publications = await Publication.find(params).lean();
    return publications;
}

const publicationService = {
    getPublication,
    getAllPublications,
    createPublication,
    editPublication,
    deletePublication,
    buyCrypto,
    searchPublications,
};
module.exports = publicationService;