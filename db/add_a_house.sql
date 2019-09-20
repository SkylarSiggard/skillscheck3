INSERT INTO house (
    property,
    address,
    city, 
    state,
    zip,
    url,
    mortgage,
    rent
)
VALUE (
    ${property},
    ${address},
    ${city},
    ${state},
    ${zip},
    ${url},
    ${mortgage},
    ${rent}
);