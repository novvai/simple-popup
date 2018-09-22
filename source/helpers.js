/**
 * Retrieve element node from the DOM
 */
export function e(selector) {
    let fetchedDOM = document.querySelectorAll(selector), elemCount = fetchedDOM.length;

    return (elemCount == 1) ? fetchedDOM[0] : (elemCount > 1) ? fetchedDOM : null;
}

/**
 * Retrieve element node from the DOM
 */
export function findIn(el, selector) {
    let fetchedDOM = el.querySelectorAll(selector), elemCount = fetchedDOM.length;

    return (elemCount == 1) ? fetchedDOM[0] : (elemCount > 1) ? fetchedDOM : null;
}