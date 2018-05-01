const acl = require("acl");

const aclInstance = new acl(new acl.memoryBackend());

//Function to create a new role
let createRole = function(role, resource, action) {
  aclInstance.allow(role, resource, action);
};

//Function to assign a new role
let assignRole = function(user, role) {
  aclInstance.addUserRoles(user, role);
};

//Function to add permissions for a role
let addPermission = function(role, resource, action) {
  aclInstance.allow(role, resource, action);
};

//Function to get acl instance
let getACLInstance = function() {
  return aclInstance;
};

//Function to check permission
let checkPermission = function(resource, action) {};

module.exports = {
  createRole,
  assignRole,
  addPermission,
  getACLInstance,
  checkPermission
};
