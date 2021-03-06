"use strict";
var BasicValidators = (function () {
    function BasicValidators() {
    }
    BasicValidators.required = function (control) {
        if (typeof control.value == 'undefined' || control.value.trim().length == 0 || control.value == null) {
            return { required: true, message: 'This is required' };
        }
        else
            return null;
    };
    return BasicValidators;
}());
exports.BasicValidators = BasicValidators;
//# sourceMappingURL=basicValidators.js.map