let companies = ["Bloomberg", "Microsoft", "Google", "Facebook", "Amazon", "Apple", "Oracle", "IBM", "Intel", "Cisco"];

// Remove first element from companies array
companies.shift();
console.log(companies);

// Remove Amazon & Add Ola
companies.splice(3, 1, "Ola");
console.log(companies);

// Add Amazon at the end
companies.push("Amazon");
console.log(companies);