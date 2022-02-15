const getDropdown = countries => {
    let html = '<option value="">Please select</option>';
    countries.map(country =>
        html += `
            <option value="${country.toLowerCase()}">${country}</option>
        `
    );

    return html;
};