const db = require("../dbConfig");

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask,
    addProjectResource
}

function getProjects(){
    return db("projects")
}
function getTasks(){
    return db("tasks as t")
        .join("projects as p", "p.id", "=", "t.projectID")
        .select(
            "t.*",
            "p.name as project_name",
            "p.description as project_description"
        )
}
function getResources(){
    return db("resources")
}
function addProject(data){
    return db("projects").insert(data, "id")
}

function addTask(data){
    return db("tasks").insert(data, "id");
}
function addResource(data){
    return db("resources").insert(data, "id")
}

function addProjectResource(data){
    return db("projects_and_resources").insert(data, "id")
}