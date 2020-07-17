const express = require("express");
const db = require("./projectModel");
const router = express.Router();

// retrieving a list of projects
router.get("/projects", (req, res) => {
    db.getProjects()
    .then((project) => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get projects" });
    })
})

router.get("/resources", (req, res) => {
    db.getResources()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get resources"})
        })
})

router.get("/tasks", (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get tasks"})
        })
})

router.post("/projects", (req, res) => {
    db.addProject(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to create new project"})
        })
})

router.post("/resources", (req, res) => {
    db.addResource(req.body)
        .then((resources) => {
            res.status(201).json(resources);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to create new resource"})
        })
})

router.post("/tasks", (req, res) => {
    db.addTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to create new task"})
        })
})

router.post("/projects/:id/resources", (req, res) => {
    let data = {
        ...req.body,
        projectID: req.params.id
    }
    db.addProjectResource(data)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to attach resource to project"})
        })
})

module.exports=router