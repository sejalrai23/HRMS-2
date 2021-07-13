const baseLink = "https://crm1728.herokuapp.com";
// const baseLink = "https://de62f2284be9.ngrok.io";


const endPoints = {
    loginURL: baseLink + "/login",
    registerURL: baseLink + "/super-admin/add",
    searchHierarchy: baseLink + "/hierarchy",
    removeHierarchy: baseLink + "/hierarchy",
    addHierarchy: baseLink + "/hierarchy",
    searchBranch: baseLink + "/branch",
    removeBranch: baseLink + "/branch",
    addBranch: baseLink + "/branch",
    searchUser: baseLink + "/user", //
    removeUser: baseLink + "/user", //success
    addUser: baseLink + "/user", //success
    addApprovalMatrix: baseLink + "/approvalmatrix",
    showApprovalMatrix: baseLink + "/approvalmatrix",
    deleteApprovalMatrix: baseLink + "/approvalmatrix",
}

module.exports = endPoints;