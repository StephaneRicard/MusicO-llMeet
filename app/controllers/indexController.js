const asyncHandler = require('express-async-handler');

const Index = require('../models/index');
// const User = require('../models/userModels');

const getIndex = asyncHandler(async (req, res) => {
    const index = await Index.find({
        user: require.user.id,
    });

    res.status(200).json(index);
});

const setIndex = asyncHandler(async (req, res) => {
    if (!require.body.text) {
        res.status(400);
        throw new Error('Add a text');
    }
    const index = await Index.create({
        text: req.body.text,
        user: req.user.id,
    });

    res.status(200).json(index);
});

const updateIndex = asyncHandler(async (req, res) => {
    const goal = await Index.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedIndex = await Index.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedIndex);
});

const deleteIndex = asyncHandler(async (req, res) => {
    const goal = await Index.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await index.remove();

    res.status(200).json({
        id: req.params.id,
    });
});

module.exports = {
    getIndex,
    setIndex,
    updateIndex,
    deleteIndex,
};
