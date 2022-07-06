const router = require("express").Router();

// GET all events
router.get("/", async (req, res) => {
  try {
    const eventData = {};
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a event
router.post("/", async (req, res) => {
  try {
    const eventData = {};
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single event
router.get("/:id", async (req, res) => {
  try {
    const eventData = {};

    if (!eventData) {
      res.status(404).json({ message: "No events found" });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// NEED TO ADD (PUT for updating event)

// DELETE a event
router.delete("/:id", async (req, res) => {
  try {
    const eventData = {};

    if (!eventData) {
      res.status(404).json({ message: "No events found!" });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;