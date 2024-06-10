export const hasParent = (child, parentId) => {
    let current = child
    while (current) {
        if (current.id === parentId) return true
        current = current.parentElement
    }
    return false
}
