const express = require('express');
const Group = require('../models/ Group');
const User = require('../models/User');
const Notification = require('../models/Notification');

const router = express.Router();

// Create Group
router.post('/groups', async (req, res) => {
    try {
        const { name, adminId } = req.body;
        const group = new Group({ name, admin: adminId, members: [adminId] });
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add Member to Group
router.post('/groups/:groupId/addMember', async (req, res) => {
    try {
        const { userId } = req.body;
        const group = await Group.findById(req.params.groupId);
        if (!group) return res.status(404).json({ message: "Group not found" });

        if (group.members.includes(userId)) {
            return res.status(400).json({ message: "User is already a member" });
        }

        group.members.push(userId);
        await group.save();

        // Send Notifications
        await Notification.create({ user: userId, message: `You were added to ${group.name}` });
        await Notification.create({ user: group.admin, message: `A new member was added to your group: ${group.name}` });

        res.json({ message: "Member added successfully and notifications sent" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
