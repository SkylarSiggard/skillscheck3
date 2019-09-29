INSERT INTO house (
    property,
    address,
    city, 
    uState,
    zip,
    url,
    mortgage,
    rent
)
VALUE (
    ${property},
    ${address},
    ${city},
    ${uState},
    ${zip},
    ${url},
    ${mortgage},
    ${rent}
);