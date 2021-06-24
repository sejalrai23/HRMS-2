const baseLink = "https://crm1728.herokuapp.com";
// const baseLink = "https://11009084d027.ngrok.io";


const endPoints = {
    loginURL: baseLink + "/login",
    registerURL: baseLink + "/super-admin/add",
    searchHierarchy: baseLink + "/hierarchy/search",
    removeHierarchy: baseLink + "/hierarchy/remove",
    addHierarchy: baseLink + "/hierarchy/add",
    searchBranch: baseLink + "/branch/search",
    removeBranch: baseLink + "/branch/remove",
    addBranch: baseLink + "/branch/add",
}

module.exports = endPoints;