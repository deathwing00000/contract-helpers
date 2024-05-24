export var PERMISSION;
(function (PERMISSION) {
    PERMISSION["DEPOSITOR"] = "DEPOSITOR";
    PERMISSION["BORROWER"] = "BORROWER";
    PERMISSION["LIQUIDATOR"] = "LIQUIDATOR";
    PERMISSION["STABLE_RATE_MANAGER"] = "STABLE_RATE_MANAGER";
})(PERMISSION || (PERMISSION = {}));
export const PERMISSION_MAP = {
    0: PERMISSION.DEPOSITOR,
    1: PERMISSION.BORROWER,
    2: PERMISSION.LIQUIDATOR,
    3: PERMISSION.STABLE_RATE_MANAGER,
};
//# sourceMappingURL=PermissionManagerTypes.js.map