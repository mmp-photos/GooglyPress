
function entireCatalog(catalog) {
    console.log(catalog);
    let sortedCatalog = catalog.sort(
        (catalog1, catalog2) => (catalog1[5] < catalog2[5]) ? 1 : (catalog1[5] > catalog[5]) ? -1 : 0);
    console.log(sortedCatalog);
    return sortedCatalog;
}