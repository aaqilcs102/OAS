const acl = require('acl');
const aclInstance = new acl(new acl.memoryBackend());

let createRole = function(role, resource, action) {
    aclInstance.allow(role, resource, action);
}

let addRole = function(user, role) {
    aclInstance.addUserRoles(user, role);
}

aclInstance.addUserRoles('Muhammad Aaqil', 'student');
aclInstance.allow('student', '/studentDetails', 'post');

module.exports = {
    aclInstance,
    createRole,
    addRole
}
