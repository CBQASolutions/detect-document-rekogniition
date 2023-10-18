"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotEmptyProperty = void 0;
function isNotEmptyProperty(value) {
    if (value !== undefined &&
        ((typeof value === 'number' && value !== 0) ||
            (typeof value === 'string' && value !== '') ||
            (Array.isArray(value) && value.length !== 0) ||
            typeof value === 'boolean')) {
        return true;
    }
    return false;
}
exports.isNotEmptyProperty = isNotEmptyProperty;
